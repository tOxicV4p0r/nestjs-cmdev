import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ChangeStringCasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("🚀 ~ file: change-string-case.pipe.ts:6 ~ ChangeStringCasePipe ~ transform ~ value:", value)
    console.log("🚀 ~ file: change-string-case.pipe.ts:6 ~ ChangeStringCasePipe ~ transform ~ metadata:", metadata)
    value.price = value.price * 10;
    value.name = value.name.toUpperCase();
    return value;
  }
}
