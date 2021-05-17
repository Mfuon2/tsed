import "reflect-metadata";

export type {
  Type,
  DecoratorParameters,
  DecoratorMethodParameters,
  StaticMethodDecorator,
  MetadataTypes,
  ValueOf,
  HashOf
} from "./interfaces";
export * from "./utils";
export * from "./domain";
export * from "./errors/UnsupportedDecoratorType";
export * from "./decorators";
