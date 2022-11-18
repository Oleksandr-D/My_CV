export interface IPostRequest {
  title: string,
  text: string,
  imagePath: string,
  autor: string
}
export interface IPostResponse extends IPostRequest {
  id: number
}