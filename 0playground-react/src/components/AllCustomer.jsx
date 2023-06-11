import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // theme
import 'primereact/resources/primereact.css'; // core css
import 'primeicons/primeicons.css'; // icons
import 'primeflex/primeflex.css'; // css utilitycons
import { CustomerService } from './CustomerService';

import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import BulkUploadDialog from './bulkUploadDialog';

export default function CustomersDataTable() {
  let emptyCustomer = {
    id: '',
    rawName: '',
    firstName: '',
    lastName: '',
    countryCode: '',
    phone: '',
    rawPhone: '',
    gender: '',
    profession: '',
    dob: null,
    anniversary: null,
    status: '',
    campaignCategories: [],
  };

  const [Customers, setCustomers] = useState(null);
  const [Customer, setCustomer] = useState(emptyCustomer);
  const [bulkUploadDialog, setBulkUploadDialog] = useState(false);
  const [customerDetailsDialog, setCustomerDetailsDialog] = useState(false);
  const [deleteCustomerDialog, setDeleteCustomerDialog] = useState(false);
  const [deleteCustomersDialog, setDeleteCustomersDialog] = useState(false);
  const [selectedCustomers, setSelectedCustomers] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);

  useEffect(() => {
    CustomerService.getCustomers().then((data) => setCustomers(data));
    async function getAllCustomer() {
      try {
        const rawData = await CustomerService.getCustomers();
        // const rawData = [];

        const formatedData = rawData.map((cust) => {
          cust.fullName = `${cust.firstName} ${cust.lastName}`;
          cust.dob = dateToString(cust.dob);
          cust.anniversary = dateToString(cust.anniversary);
          cust.number = `${cust.countryCode} ${cust.phone}`;

          return cust;
        });
        setCustomers([...formatedData]);
      } catch (error) {
        console.log(error);
      }
    }
    getAllCustomer();
  }, []);

  const genders = ['Male', 'Female', 'Other'];

  const professions = ['Doctor', 'Engineer', 'Teacher', 'Business', 'Other'];

  const hideCustomerDetailsDialog = () => {
    setSubmitted(false);
    setCustomerDetailsDialog(false);
  };

  const hideDeleteCustomerDialog = () => {
    setDeleteCustomerDialog(false);
  };

  const hideDeleteCustomersDialog = () => {
    setDeleteCustomersDialog(false);
  };
  function dateToString(date) {
    if (!date) {
      return;
    }
    const option = {
      timeZone: 'Asia/Kolkata',
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    };

    const newDate = new Date(date);
    const isoString = newDate.toLocaleString('en-IN', option);

    return isoString;
  }

  function stringToDate(date) {
    const dateObj =
      typeof date === 'string'
        ? new Date(
            String(date).slice(6), // Year
            parseInt(String(date).slice(3, 5)) - 1, // Month (subtract 1 because months are zero-based)
            String(date).slice(0, 2) // Day
          )
        : date;

    return dateObj;
  }

  function addNewCustomer() {
    setCustomer(emptyCustomer);
    setSubmitted(false);
    setCustomerDetailsDialog(true);
  }

  function editCustomer(rowData) {
    console.log('Inside Edit Customer function');
    console.log(rowData);
    setCustomer({ ...rowData });

    // console.log(Customer);
    // console.log(Customer.campaignCategories);
    // console.log(Customer.campaignCategories.includes('Personal'));
    // console.log(typeof Customer.campaignCategories);

    setCustomerDetailsDialog(true);
  }
  const saveCustomer = () => {
    setSubmitted(true);

    if (
      Customer.firstName.trim() &&
      Customer.lastName.trim() &&
      Customer.phone.trim()
    ) {
      let _Customers = [...Customers];
      let _Customer = { ...Customer };

      if (Customer.id) {
        //const index = findIndexById(Customer.id);
        let index = -1;
        for (let i = 0; i < Customers.length; i++) {
          if (Customers[i].id === Customer.id) {
            index = i;
            break;
          }
        }

        _Customers[index] = _Customer;
        toast.current.show({
          severity: 'success',
          summary: 'Successful',
          detail: 'Customer Updated',
          life: 3000,
        });
      } else {
        _Customer.id = createId();
        _Customers.push(_Customer);
        toast.current.show({
          severity: 'success',
          summary: 'Successful',
          detail: 'Customer Created',
          life: 3000,
        });
      }

      setCustomers(_Customers);
      setCustomerDetailsDialog(false);
      setCustomer(emptyCustomer);
    }
  };

  function confirmDeleteCustomer(Customer) {
    setCustomer(Customer);
    setDeleteCustomerDialog(true);
  }

  function deleteCustomer() {
    let _Customers = Customers.filter((val) => val.id !== Customer.id);

    setCustomers(_Customers);
    setDeleteCustomerDialog(false);
    setCustomer(emptyCustomer);
    toast.current.show({
      severity: 'success',
      summary: 'Successful',
      detail: 'Customer Deleted',
      life: 3000,
    });
  }
  function confirmDeleteSelected() {
    setDeleteCustomersDialog(true);
  }

  function deleteSelectedCustomers() {
    let _Customers = Customers.filter(
      (val) => !selectedCustomers.includes(val)
    );

    setCustomers(_Customers);
    setDeleteCustomersDialog(false);
    setSelectedCustomers(null);
    toast.current.show({
      severity: 'success',
      summary: 'Successful',
      detail: 'Customers Deleted',
      life: 3000,
    });
  }

  //   const findIndexById = (id) => {
  //     let index = -1;

  //     for (let i = 0; i < Customers.length; i++) {
  //       if (Customers[i].id === id) {
  //         index = i;
  //         break;
  //       }
  //     }

  //     return index;
  //   };

  const createId = () => {
    let id = '';
    let chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return id;
  };

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const onInputChange = (e, name) => {
    console.log('Inside onInputChange function');
    console.log(name, e.target.value);
    console.log(name, e.value);
    console.log(typeof e.target.value);
    let val = (e.target && e.target.value) || '';
    let _Customer = { ...Customer };
    console.log(_Customer.campaignCategories.includes('Personal'));
    if (name === 'dob' || name === 'anniversary') {
      val = dateToString(val);
      _Customer[`${name}`] = dateToString(val);
    } else if (name === 'campaignCategories') {
      if (e.checked) _Customer[`${name}`].push(val);
      else _Customer[`${name}`].splice(_Customer[`${name}`].indexOf(val), 1);
    } else {
      _Customer[`${name}`] = val;
      console.log(_Customer);
    }

    setCustomer(_Customer);
  };

  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label="Bulk upload Customers"
          icon="pi pi-upload"
          severity="success"
          onClick={() => setBulkUploadDialog(true)}
        />
        {bulkUploadDialog && (
          <BulkUploadDialog onHide={() => setBulkUploadDialog(false)} />
        )}
        <Button
          label="Add New Customer"
          icon="pi pi-plus"
          severity="success"
          onClick={addNewCustomer}
        />
        <Button
          label="Delete"
          icon="pi pi-trash"
          severity="danger"
          onClick={confirmDeleteSelected}
          disabled={!selectedCustomers || !selectedCustomers.length}
        />
      </div>
    );
  };

  const rightToolbarTemplate = () => {
    return (
      <Button
        label="Export"
        icon="pi pi-upload"
        className="p-button-help"
        onClick={exportCSV}
      />
    );
  };

  const statusBodyTemplate = (rowData) => {
    return (
      <Tag
        value={rowData.status}
        severity={getSeverity(rowData)}
        style={{ width: '70px' }}
        rounded
      ></Tag>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          className="mr-2"
          onClick={() => editCustomer(rowData)}
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          onClick={() => confirmDeleteCustomer(rowData)}
        />
      </React.Fragment>
    );
  };

  const getSeverity = (Customer) => {
    switch (Customer.status) {
      case 'complete':
        return 'success';
      case 'partial':
        return 'info';
      case 'duplicate':
        return 'warning';
      case 'missing':
        return 'danger';

      default:
        return null;
    }
  };

  const header = (
    <div className="flex flex-wrap gap-2 ">
      <span className="p-input-icon-left flex-stretch">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </span>
    </div>
  );
  const CustomerDialogFooter = (
    <React.Fragment>
      <Button
        label="Cancel"
        icon="pi pi-times"
        outlined
        onClick={hideCustomerDetailsDialog}
      />
      <Button label="Save" icon="pi pi-check" onClick={saveCustomer} />
    </React.Fragment>
  );
  const deleteCustomerDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteCustomerDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteCustomer}
      />
    </React.Fragment>
  );
  const deleteCustomersDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteCustomersDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteSelectedCustomers}
      />
    </React.Fragment>
  );

  return (
    <div>
      <Toast ref={toast} />
      <div className="card">
        <Toolbar
          className="mb-4"
          left={leftToolbarTemplate}
          right={rightToolbarTemplate}
        ></Toolbar>

        <DataTable
          ref={dt}
          value={Customers}
          selection={selectedCustomers}
          onSelectionChange={(e) => setSelectedCustomers(e.value)}
          dataKey="id"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Customers"
          globalFilter={globalFilter}
          header={header}
        >
          <Column selectionMode="multiple" exportable={false}></Column>
          <Column
            field="id"
            header="Code"
            sortable
            style={{ minWidth: '10rem' }}
          ></Column>
          <Column
            field="fullName"
            header="Full Name"
            sortable
            style={{ minWidth: '16rem' }}
          ></Column>
          <Column
            field="number"
            header="Phone"
            sortable
            style={{ minWidth: '12rem' }}
          ></Column>
          <Column
            field="gender"
            header="Gender"
            style={{ minWidth: '8rem' }}
          ></Column>
          <Column
            field="profession"
            header="Profession"
            style={{ minWidth: '10rem' }}
          ></Column>
          <Column
            field="dob"
            header="Date of Birth"
            style={{ minWidth: '10rem' }}
          ></Column>
          <Column
            field="anniversary"
            header="Anniversary"
            style={{ minWidth: '10rem' }}
          ></Column>
          <Column
            field="status"
            header="Status"
            body={statusBodyTemplate}
            style={{ minWidth: '8rem' }}
          ></Column>
          <Column
            field="actions"
            header="Actions"
            body={actionBodyTemplate}
            exportable={false}
            style={{ minWidth: '12rem' }}
          ></Column>
        </DataTable>
      </div>
      {/* Edit Existing Customer Dialog */}
      <Dialog
        visible={customerDetailsDialog}
        style={{ width: '50rem' }}
        //breakpoints={{ '960px': '75vw', '641px': '90vw' }}
        header="Customer Details"
        modal
        className="p-fluid"
        footer={CustomerDialogFooter}
        onHide={hideCustomerDetailsDialog}
      >
        <div className="formgrid grid">
          <div className="field col">
            <span className="p-float-label mt-2">
              <InputText
                id="firstName"
                value={Customer.firstName}
                onChange={(e) => onInputChange(e, 'firstName')}
                required
                className={classNames({
                  'p-invalid': submitted && !Customer.firstName,
                })}
              />
              <label htmlFor="firstName">First Name</label>

              {submitted && !Customer.firstName && (
                <small className="p-error">First Name is required.</small>
              )}
            </span>
          </div>
          <div className="field col">
            <span className="p-float-label mt-2">
              <InputText
                id="lastName"
                value={Customer.lastName}
                onChange={(e) => onInputChange(e, 'lastName')}
                required
                className={classNames({
                  'p-invalid': submitted && !Customer.lastName,
                })}
              />
              <label htmlFor="lastName">Last Name</label>

              {submitted && !Customer.lastName && (
                <small className="p-error">Last Name is required.</small>
              )}
            </span>
          </div>
        </div>
        {Customer.rawName !== '' && (
          <div className="field col">
            <span className="p-float-label mt-2">
              <InputText id="rawName" value={Customer.rawName} disabled />
              <label htmlFor="rawName">Name in Data File</label>
            </span>
          </div>
        )}
        <div className="formgrid grid">
          <div className="field col">
            <span className="p-float-label mt-2">
              <InputText
                id="countryCode"
                value={Customer.countryCode}
                onChange={(e) => onInputChange(e, 'countryCode')}
                required
                className={classNames({
                  'p-invalid': submitted && !Customer.countryCode,
                })}
              />
              <label htmlFor="countryCode">Country Code</label>

              {submitted && !Customer.countryCode && (
                <small className="p-error">Country Code is required.</small>
              )}
            </span>
          </div>
          <div className="field col">
            <span className="p-float-label mt-2">
              <InputText
                id="phone"
                value={Customer.phone}
                onChange={(e) => onInputChange(e, 'phone')}
                required
                className={classNames({
                  'p-invalid': submitted && !Customer.phone,
                })}
              />
              <label htmlFor="phone">Phone</label>

              {submitted && !Customer.phone && (
                <small className="p-error">Phone is required.</small>
              )}
            </span>
          </div>
        </div>
        {Customer.rawPhone !== '' && (
          <div className="field col">
            <span className="p-float-label mt-2">
              <InputText id="rawPhone" value={Customer.rawPhone} disabled />
              <label htmlFor="rawPhone">Phone in Data File</label>
            </span>
          </div>
        )}
        {/* Gender and profession */}
        <div className="formgrid grid">
          <div className="field col">
            <span className="p-float-label mt-2">
              <Dropdown
                id="gender"
                value={Customer.gender}
                onChange={(e) => onInputChange(e, 'gender')}
                options={genders.map((g) => ({ label: g, value: g }))}
                optionLabel="label"
                placeholder="Select Gender"
                className="w-full"
              />
              <label htmlFor="gender">Gender</label>
            </span>
          </div>
          <div className="field col">
            <span className="p-float-label mt-2">
              <Dropdown
                id="profession"
                value={Customer.profession}
                onChange={(e) => onInputChange(e, 'profession')}
                options={professions.map((g) => ({ label: g, value: g }))}
                optionLabel="label"
                placeholder="Profession"
                className="w-full"
              />
              <label htmlFor="profession">Profession</label>
            </span>
          </div>
        </div>
        {/* DOB and Anniversary  */}
        <div className="formgrid grid">
          <div className="field col">
            <span className="p-float-label mt-3">
              <Calendar
                value={stringToDate(Customer.dob)}
                onChange={(e) => onInputChange(e, 'dob')}
              />
              <label htmlFor="dob">Date of Birth</label>
            </span>
          </div>
          <div className="field col">
            <span className="p-float-label mt-3">
              <Calendar
                value={stringToDate(Customer.anniversary)}
                onChange={(e) => onInputChange(e, 'anniversary')}
              />
              <label htmlFor="anniversary">Anniversary</label>
            </span>
          </div>
        </div>
        {/* Campaign Category selection  */}
        <div className="field">
          <label className="mb-3 mt-2 font-bold">
            Select Campaigns Categories
          </label>
          <div className="formgrid grid">
            <div className="field-checkbox col-6">
              <Checkbox
                inputId="category1"
                name="category"
                value="personal"
                onChange={(e) => onInputChange(e, 'campaignCategories')}
                checked={Customer.campaignCategories.includes('personal')}
              />
              <label htmlFor="category1">Personal (B'day, Anniversary)</label>
            </div>
            <div className="field-checkbox col-6">
              <Checkbox
                inputId="category2"
                name="category"
                value="festival"
                onChange={(e) => onInputChange(e, 'campaignCategories')}
                checked={Customer.campaignCategories.includes('festival')}
              />
              <label htmlFor="category2">Festivals (Holi, Diwali..)</label>
            </div>
            <div className="field-checkbox col-6">
              <Checkbox
                inputId="category3"
                name="category"
                value="special"
                onChange={(e) => onInputChange(e, 'campaignCategories')}
                checked={Customer.campaignCategories.includes('special')}
              />
              <label htmlFor="category3">
                Special Days (Men's Day, Mother's Day...)
              </label>
            </div>
            <div className="field-checkbox col-6">
              <Checkbox
                inputId="category4"
                name="category"
                value="market"
                onChange={(e) => onInputChange(e, 'campaignCategories')}
                checked={Customer.campaignCategories.includes('market')}
              />
              <label htmlFor="category4">Stock Market Messages</label>
            </div>
            <div className="field-checkbox col-6">
              <Checkbox
                inputId="category5"
                name="category"
                value="marketing"
                onChange={(e) => onInputChange(e, 'campaignCategories')}
                checked={Customer.campaignCategories.includes('marketing')}
              />
              <label htmlFor="category5">Marketing Messages</label>
            </div>
          </div>
        </div>
      </Dialog>

      {/* Delete Single Customer Dialog */}
      <Dialog
        visible={deleteCustomerDialog}
        style={{ width: '32rem' }}
        breakpoints={{ '960px': '75vw', '641px': '90vw' }}
        header="Confirm"
        modal
        footer={deleteCustomerDialogFooter}
        onHide={hideDeleteCustomerDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: '2rem' }}
          />
          {Customer && (
            <span>
              Are you sure you want to delete <b>{Customer.name}</b>?
            </span>
          )}
        </div>
      </Dialog>
      {/* Delete Multiple Customers Dialog */}
      <Dialog
        visible={deleteCustomersDialog}
        style={{ width: '60rem' }}
        breakpoints={{ '960px': '90vw', '641px': '90vw' }}
        header="Confirm"
        modal
        footer={deleteCustomersDialogFooter}
        onHide={hideDeleteCustomersDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: '2rem' }}
          />
          {Customer && (
            <span>Are you sure you want to delete the selected Customers?</span>
          )}
        </div>
      </Dialog>
    </div>
  );
}
