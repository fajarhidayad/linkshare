package common

type Response struct {
	Data any `json:"data"`
	Code int `json:"code"`
}

type ErrorResponse struct {
	Code  int    `json:"code"`
	Error string `json:"error"`
}
