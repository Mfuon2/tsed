import {getJsonSchema, PipeMethods, OverrideProvider, ParamMetadata, ValidationError, ValidationPipe} from "@tsed/common";
import {validate} from "./validate";

@OverrideProvider(ValidationPipe)
export class CustomValidationPipe extends ValidationPipe implements PipeMethods {
  public transform(obj: any, metadata: ParamMetadata): void {
    // JSON service contain tool to build the Schema definition of a model.
    const schema = getJsonSchema(metadata.type);

    if (schema) {
      const valid = validate(schema, obj);

      if (!valid) {
        throw new ValidationError("My message", [
          /// list of errors
        ]);
      }
    }
  }
}
