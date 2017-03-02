import { Component } from '@angular/core';
import { Document } from './document'

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  documents: Document[] = [
  {
    title: "My First Doc",
    description: "asdfasdf",
    file_url: "http://google.com",
    updated_at: "str",
    image_url: "http://google.com"

  },
  ]
}