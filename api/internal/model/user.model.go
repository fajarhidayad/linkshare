package model

import "link-share-api/pkg/common"

type User struct {
	common.ModelWithID
	Email             string `json:"email"`
	Password          string `json:"password"`
	FirstName         string `json:"firstName"`
	LastName          string `json:"lastName"`
	ProfilePictureUrl string `json:"profilePictureUrl"`
	Links             []Link `json:"-"`
}
