import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FileUpload } from 'primereact/fileupload';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

function BulkUploadDialog({ onHide }) {
  function onUpload() {
    console.log('onUpload');
  }

  function saveCustomer() {
    console.log('saveCustomer');
  }
  const bulkUploadDialogFooter = (
    <React.Fragment>
      <Button label="Cancel" icon="pi pi-times" outlined onClick={onHide} />
      <Button label="Save" icon="pi pi-check" onClick={saveCustomer} />
    </React.Fragment>
  );

  const sampleData = [
    {
      id: 1,
      name: 'Aarav Sharma',
      phone: '+91 9876543210',
      gender: 'Male',
      profession: 'Doctor',
      dob: '1985-03-12',
      anniversary: '2010-07-20',
      status: 'partial',
    },
    {
      id: 2,
      name: 'Aditi Patel',
      phone: '+91 8765432109',
      gender: 'Female',
      profession: 'Engineer',
      dob: '1990-08-25',
      anniversary: '2015-11-30',
      status: 'complete',
    },
    {
      id: 3,
      name: 'Arjun Gupta',
      phone: '+91 7654321098',
      gender: 'Male',
      profession: 'Teacher',
      dob: '1978-12-05',
      anniversary: '2003-02-18',
      status: 'missing',
    },
    {
      id: 4,
      name: 'Aishwarya Singh',
      phone: '+91 6543210987',
      gender: 'Female',
      profession: 'Business',
      dob: '1989-06-02',
      anniversary: '2014-09-12',
      status: 'partial',
    },
  ];

  const example = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="m-0">Example</h4>
    </div>
  );

  const sampleDataTable = (
    <React.Fragment>
      <DataTable
        value={sampleData}
        dataKey="id"
        className="mt-4"
        header={example}
      >
        <Column
          field="name"
          header="Name"
          style={{ minWidth: '10rem' }}
        ></Column>
        <Column
          field="phone"
          header="Phone"
          style={{ minWidth: '10rem' }}
        ></Column>
        <Column
          field="gender"
          header="Gender"
          style={{ minWidth: '6rem' }}
        ></Column>
        <Column
          field="profession"
          header="Profession"
          style={{ minWidth: '8rem' }}
        ></Column>
        <Column field="dob" header="DOB" style={{ minWidth: '10rem' }}></Column>
        <Column
          field="anniversary"
          header="Anniversary"
          style={{ minWidth: '8rem' }}
        ></Column>
      </DataTable>
    </React.Fragment>
  );

  return (
    <Dialog
      visible={true}
      style={{ width: '60rem' }}
      breakpoints={{ '960px': '90vw', '641px': '90vw' }}
      header="Upload Customers from csv/excel file"
      modal
      //footer={bulkUploadDialogFooter}
      onHide={onHide}
      closable={true}
      closeOnEscape={true}
    >
      <div className="confirmation-content">
        <i
          className="pi pi-exclamation-triangle mr-3"
          style={{ fontSize: '2rem' }}
        />
        <span>
          Make sure you have right headers - "Name", "Phone", "Gender",
          "Profession", "DOB", "Anniversary" <br />
        </span>

        {sampleDataTable}
        <FileUpload
          className="mt-5"
          mode="basic"
          chooseLabel="Choose file"
          //url="/api/upload"
          accept=".csv,.xlsx,.xls"
          maxFileSize={1000000}
          onUpload={onUpload}
        />
      </div>
    </Dialog>
  );
}

export default BulkUploadDialog;
