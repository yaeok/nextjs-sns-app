export type UsecaseInput = object

export type UsecaseOutput = object

export interface Usecase<UsecaseInput, UsecaseOutput> {
  execute(input: UsecaseInput): UsecaseOutput
}
