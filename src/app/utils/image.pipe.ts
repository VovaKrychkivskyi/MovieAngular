import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class ImagePipe implements PipeTransform {
  transform(imagePath: string): string {
    return imagePath === 'N/A' ? 'https://picsum.photos/seed/picsum/200/300' : imagePath;
  }
}
