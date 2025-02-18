package main

import (
	"fmt"
	"log"
	"net/http"
	"saile/VeXT/pkg/websocket"

	"github.com/gorilla/websocket"
)

func homePage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Henloworld111!!!111")
}

func reader(conn *websocket.Conn) {
	for {
		messagetype, p, err := conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}

		log.Println(string(p))

		if err := conn.WriteMessage(messagetype, p); err != nil {
			log.Println(err)
			return
		}
	}
}

func wsEndpoint(w http.ResponseWriter, r *http.Request) {
	ws, err := websocket.Upgrade(w, r)
	if err != nil {
		log.Println(err)
	}

	log.Println("Client Successfully connected to websonket")

	reader(ws)
}

func setupRoutes() {
	http.HandleFunc("/", homePage)
	http.HandleFunc("/ws", wsEndpoint)
}

func main() {
	fmt.Println("VeXT running on :8080")
	setupRoutes()
	log.Fatal(http.ListenAndServe(":8080", nil))
}
