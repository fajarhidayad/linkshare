package model

import (
	"link-share-api/pkg/common"
)

type Link struct {
	common.ModelWithID
	Platform string `json:"platform"`
	Link     string `json:"link"`
	UserID   string `json:"userId"`
	User     User   `json:"-"`
}
