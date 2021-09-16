import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './createPost.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  id: number;
  content: string;
  title: string;
}
