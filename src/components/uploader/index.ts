export type FileError = {
  code: string
  message?: string
}

export type RejectedFile = {
  file: File
  errors: FileError[]
}
