package handlers

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func StaticPublicAssetHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Unknown request :: StaticMediaAssetHandler %s", r.Header)
}

func StaticMediaHandler(r *mux.Router, path string) {
	// redirPath := DirectoryTable["STATIC_PUBLIC_MEDIA"]
	redirPath := DirectoryTable["STATIC_PRIVATE_MEDIA"]

	r.PathPrefix(path).Handler(http.StripPrefix(path, http.FileServer(http.Dir(redirPath))))
}
