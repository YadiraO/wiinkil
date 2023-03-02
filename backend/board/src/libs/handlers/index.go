package handlers

var DirectoryTable = map[string]string{
	"STATIC_PUBLIC_MEDIA":  "assets/images/",
	"STATIC_PRIVATE_MEDIA": "assets/private/",
}

func IndxTest() string {
	return "/test/"
}
