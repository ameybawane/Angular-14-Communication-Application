import { Component, OnInit } from '@angular/core';
import { IDocsManagement } from '../idocs-management';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // import forms library
import { SAllFunctionService } from '../s-all-function.service';

@Component({
  selector: 'app-docs-management',
  templateUrl: './docs-management.component.html',
  styleUrls: ['./docs-management.component.scss']
})
export class DocsManagementComponent implements OnInit {

  editUploadedDocsForm!: FormGroup; // property form 
  addUploadForm!: FormGroup;
  getItemFromLocalStorage: any;
  getDocs: IDocsManagement[] = [];
  docsList: IDocsManagement[] = [];
  docDeletionId: any;
  docEditId: any;

  constructor(private fb: FormBuilder,
    private fn: SAllFunctionService) { }

  ngOnInit(): void {// method
    this.fn.userAuth();
    this.docsList = JSON.parse(localStorage.getItem('docsMngtLocalStorage')!);
    this.editUploadedDocsForm = this.fb.group({
      fileDescription: ['', [Validators.required]]
    })

    this.addUploadForm = this.fb.group({
      uploadFileDescription: ['', [Validators.required]],
      uploadFileUploader: ['', [Validators.required]]
    })
  }

  addUpload(): void {
    let docs!: IDocsManagement;
    // replacing file path and display only filename
    let replacedFileName = this.addUploadForm.get('uploadFileUploader')?.value;
    replacedFileName = replacedFileName.replace('C:\\fakepath\\', '');
    docs = {
      fileDescription: this.addUploadForm.value.uploadFileDescription,
      fileName: replacedFileName,
      id: Number(new Date())
    }
    this.getItemFromLocalStorage = JSON.parse(localStorage.getItem('docsMngtLocalStorage')!);
    this.getDocs = this.getItemFromLocalStorage ? this.getItemFromLocalStorage : []; // ternary operator
    this.getDocs.push(docs);
    localStorage.setItem("docsMngtLocalStorage", JSON.stringify(this.getDocs));
    this.ngOnInit();
  }

  getDocById(id: number): void {
    this.docDeletionId = id;
  }

  deleteDocById() {
    this.docsList = this.docsList.filter(doc => doc.id !== this.docDeletionId);
    localStorage.setItem('docsMngtLocalStorage', JSON.stringify(this.docsList));
  }

  editDocById(id: number): void {
    this.docEditId = id;
    this.editUploadedDocsForm.patchValue({
      fileDescription: this.fn.getDocInfoById(this.docEditId).fileDescription
    })
  }

  updateDocsDetail() {
    for (let i = 0; i < this.docsList.length; i++) {
      if (this.docsList[i].id == this.docEditId) {
        this.docsList[i].fileDescription = this.editUploadedDocsForm.value.fileDescription;
        break;
      }
    }
    this.docEditId = 0;
    localStorage.setItem('docsMngtLocalStorage', JSON.stringify(this.docsList));
  }
}
