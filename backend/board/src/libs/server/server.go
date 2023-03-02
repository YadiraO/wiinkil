package server

import (
	"fmt"
	"log"
	"net/http"

	"go_server/src/libs/handlers"

	"github.com/gorilla/mux"
)

func RunServer() {
	router := mux.NewRouter()

	// Tasks Routes WORKING
	// router.HandleFunc("/tasks", handlers.StaticPublicAssetHandler).Methods("GET")
	// router.HandleFunc("/tasks", handlers.GetTasks).Methods("GET")
	// router.HandleFunc("/tasks/{id}", handlers.GetOneTask).Methods("GET")
	// router.HandleFunc("/tasks/{id}", handlers.DeleteTask).Methods("DELETE")
	// router.HandleFunc("/tasks/{id}", handlers.UpdateTask).Methods("PUT")

	// STATIC FILES ON SERVER
	// router.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("assets/"))))
	handlers.StaticMediaHandler(router, "/static/")

	fmt.Println("Server ON | no port ")
	log.Fatal(http.ListenAndServe(":80", router))
}
