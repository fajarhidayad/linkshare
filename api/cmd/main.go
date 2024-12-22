package main

import (
	"fmt"
	"link-share-api/pkg/database"
	"log"
	"os"

	"github.com/gin-gonic/gin"
	_ "github.com/joho/godotenv/autoload"
)

func main() {
	r := gin.Default()
	db := database.ConnectPostgres()

	r.GET("/health", func(ctx *gin.Context) {
		if db.Error != nil {
			log.Println(db.Error)
			ctx.JSON(500, gin.H{
				"message": "Internal Server Error",
			})
			return
		}

		ctx.JSON(200, gin.H{
			"message": "OK",
		})
	})

	PORT := os.Getenv("PORT")
	r.Run(fmt.Sprintf(":%s", PORT))
}
