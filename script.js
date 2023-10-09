const Sl = document.getElementById("sl");
const Sr = document.getElementById("sr");
const SrEl = document.getElementById("srEl");
const DobEl = document.getElementById("dob");
const SearchBtn = document.getElementById("searchBtn");
const StudentName = document.getElementById("studentName");
const StudentNameEl = document.getElementById("studentNameEl");
const GenderEl = document.getElementById("gender");
const FatherName = document.getElementById("fatherName");
const FatherNameEl = document.getElementById("fatherNameEl");
const MotherName = document.getElementById("motherName");
const MotherNameEl = document.getElementById("motherNameEl");
const ClassEl = document.getElementById("classEl");
const Class = document.getElementById("class");
const SectionEL = document.getElementById("section");
const HouseName = document.getElementById("houseName");
const DoaEl = document.getElementById("doa");
const ReligionEL = document.getElementById("religion");
const CategoryEl = document.getElementById("category");
const CasteEl = document.getElementById("caste");
const LocalAddress = document.getElementById("localAddress");
const PermanentAddress = document.getElementById("permanentAddress");
const MobileNumber = document.getElementById("mobileNumber");
const AlternateMobile = document.getElementById("alternateMobile");
const AadharCardNumber = document.getElementById("aadharCardNumber");
const TCReceived = document.getElementById("tcReceived");
const OtherDocument = document.getElementById("otherDocument");
const OtherRemark = document.getElementById("otherRemark");
const NewStudent = document.getElementById("newStudent");
const Ins_1 = document.getElementById("InstallmentAmount1");
const Ins_1_Date = document.getElementById("InstallmentDate1");
const Ins_2 = document.getElementById("InstallmentAmount2");
const Ins_2_Date = document.getElementById("InstallmentDate2");
const Ins_3 = document.getElementById("InstallmentAmount3");
const Ins_3_Date = document.getElementById("InstallmentDate3");
const Ins_4 = document.getElementById("InstallmentAmount4");
const Ins_4_Date = document.getElementById("InstallmentDate4");
const Admission_Fee = document.getElementById("admissionFee");
const School_Fees = document.getElementById("schoolFees");
const Total_Fee = document.getElementById("totalAmount");
const Discount_Fee = document.getElementById("discount");
const Balance_Fee = document.getElementById("balanceAmount");
const GetData = document.getElementById("getData");
const Update = document.getElementById("update");
const Registration = document.getElementById("registration");
const FeeSubmit = document.getElementById("feeSubmit");
const FeeData = document.getElementById("feeData");
const AdmissionForm = document.getElementById("admissionForm");
const SchoolFee = document.getElementById("schoolFee");
const StudentFeeListEL = document.getElementById("studentFeeListEl");
const Back = document.getElementById("back");
const LogInBtn = document.getElementById("logInBtn");
const SignIn = document.getElementById("signIn");
const Content = document.getElementById("content");
const LogOutBtn = document.getElementById("logOut");

const url = "http://43.204.145.206:5000/";
const postUrl = "http://43.204.145.206:5000/post";
const putUrl = "http://43.204.145.206:5000/put";
const loginUrl = "http://43.204.145.206:5000/login";

async function logIn() {
  let userId = document.getElementById("userId").value;
  let password = document.getElementById("pass").value;
  const loginResult = await fetch(loginUrl, {
    method: "POST",
    body: JSON.stringify({ userId, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await loginResult.json();

  const user = result.userId;
  if (user) {
    localStorage.setItem("user", JSON.stringify(result));
    alert("WELCOME TO THE BBPS SHIKOHABAD");
    home();
  } else {
    alert("Please Check UserId and Password");
  }
}

function updateDOM() {
  if (localStorage.getItem("user")) {
    activeUser = JSON.parse(localStorage.getItem("user"));
    if (activeUser._id) {
      home();
    }
  }
}

function home() {
  Content.classList.remove("display");
  Back.classList.add("display");
  AdmissionForm.classList.add("display");
  SchoolFee.classList.add("display");
  StudentFeeListEL.classList.add("display");
  SignIn.classList.add("display");
}

function backTo() {
  Back.classList.add("display");
  AdmissionForm.classList.add("display");
  SchoolFee.classList.add("display");
  StudentFeeListEL.classList.add("display");
  SignIn.classList.add("display");
  Content.classList.remove("display");
}

function displayRegistration() {
  AdmissionForm.classList.remove("display");
  Back.classList.remove("display");
  SchoolFee.classList.add("display");
  StudentFeeListEL.classList.add("display");
  SignIn.classList.add("display");
  Content.classList.remove("display");
}

function displayFeeSubmit() {
  SchoolFee.classList.remove("display");
  Content.classList.remove("display");
  Back.classList.remove("display");
  StudentFeeListEL.classList.add("display");
  SignIn.classList.add("display");
  AdmissionForm.classList.add("display");
}

function displayFeeData() {
  StudentFeeListEL.classList.remove("display");
  Content.classList.remove("display");
  Back.classList.remove("display");
  SignIn.classList.add("display");
  AdmissionForm.classList.add("display");
  SchoolFee.classList.add("display");
}

function logOut() {
  localStorage.clear();
  Content.classList.add("display");
  Back.classList.add("display");
  AdmissionForm.classList.add("display");
  SchoolFee.classList.add("display");
  StudentFeeListEL.classList.add("display");
  SignIn.classList.remove("display");
}

async function getData() {
  const getResponse = await fetch(url);
  const getResult = await getResponse.json();
  return filterData(getResult);

  function filterData(data) {
    for (let i = 0; i < data.length; i++) {
      let sr = data[i].SR.toLowerCase();
      let findSr = Sr.value.toLowerCase();
      if (findSr.toString() === sr.toString()) {
        StudentName.value = data[i].Name.toUpperCase();
        FatherName.value = data[i].FName.toUpperCase();
        MotherName.value = data[i].MName.toUpperCase();
        Class.value = data[i].Class.toUpperCase();
        Ins_1.value = Number(data[i].Installment_1ST);
        Ins_1_Date.value = data[i].Installment_1ST_Date;
        Ins_2.value = Number(data[i].Installment_2ND);
        Ins_2_Date.value = data[i].Installment_2ND_Date;
        Ins_3.value = Number(data[i].Installment_3RD);
        Ins_3_Date.value = data[i].Installment_3RD_Date;
        Ins_4.value = Number(data[i].Installment_4TH);
        Ins_4_Date.value = data[i].Installment_4TH_Date;
        Admission_Fee.value = Number(data[i].AdmissionFee);
        School_Fees.value = Number(data[i].SchoolFee);
        Total_Fee.value = Number(data[i].TotalFee);
        Discount_Fee.value = Number(data[i].Discount);
        Balance_Fee.value = Number(data[i].BalanceFee);
        return;
      }
    }
  }
}

function updateData(e) {
  e.preventDefault();
  const feeData = {
    AdmissionFee: Admission_Fee.value,
    SchoolFee: School_Fees.value,
    TotalFee: Total_Fee.value,
    BalanceFee: Balance_Fee.value,
    Discount: Discount_Fee.value,
    Installment_1ST: Ins_1.value,
    Installment_1ST_Date: Ins_1_Date.value,
    Installment_2ND: Ins_2.value,
    Installment_2ND_Date: Ins_2_Date.value,
    Installment_3RD: Ins_3.value,
    Installment_3RD_Date: Ins_3_Date.value,
    Installment_4TH: Ins_4.value,
    Installment_4TH_Date: Ins_4_Date.value,
  };

  const updateFeeData = async () => {
    let putResult = await fetch(putUrl, {
      method: "PUT",
      body: JSON.stringify(feeData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    putResult = await putResult.json();
    console.log(putResult);
  };

  return updateFeeData();
}

async function studentFeeList() {
  const getResponse = await fetch(url);
  const getResult = await getResponse.json();
  console.log(getResult);
  let table = document.getElementById("myTable");
  for (let i = 0; i < getResult.length; i++) {
    let row = `<tr>
        <td>${getResult[i].SR}</td>
        <td>${getResult[i].Name}</td>
        <td>${getResult[i].FName}</td>
        <td>${getResult[i].MName}</td>
        <td>${getResult[i].Class}</td>
        <td>${getResult[i].Section}</td>
        <td>${getResult[i].Installment_1ST}</td>
        <td>${getResult[i].Installment_1ST_Date}</td>
        <td>${getResult[i].Installment_2ND}</td>
        <td>${getResult[i].Installment_2ND_Date}</td>
        <td>${getResult[i].Installment_3RD}</td>
        <td>${getResult[i].Installment_3RD_Date}</td>
        <td>${getResult[i].Installment_4TH}</td>
        <td>${getResult[i].Installment_4TH_Date}</td>
      </tr>`;

    table.innerHTML += row;
  }
}

function addRecord(e) {
  e.preventDefault();

  const formDataObj = {
    SL: Sl.value ? Number(Sl.value) : "",
    SR: SrEl.value ? SrEl.value : "",
    DOB: DobEl.value ? DobEl.value : "",
    Name: StudentNameEl.value ? StudentNameEl.value : "",
    Gender: GenderEl.value ? GenderEl.value : "",
    FName: FatherNameEl.value ? FatherNameEl.value : "",
    MName: MotherNameEl.value ? MotherNameEl.value : "",
    Class: ClassEl.value ? ClassEl.value : "",
    Section: SectionEL.value ? SectionEL.value : "",
    House: HouseName.value ? HouseName.value : "",
    DOA: DoaEl.value ? DoaEl.value : "",
    Religion: ReligionEL.value ? ReligionEL.value : "",
    Category: CategoryEl.value ? CategoryEl.value : "",
    Caste: CasteEl.value ? CasteEl.value : "",
    LAddress: LocalAddress.value ? LocalAddress.value : "",
    PAddress: PermanentAddress.value ? PermanentAddress.value : "",
    Mobile1: MobileNumber.value ? Number(MobileNumber.value) : "",
    Mobile2: AlternateMobile.value ? Number(AlternateMobile.value) : "",
    Aadhar: AadharCardNumber.value ? Number(AadharCardNumber.value) : "",
    TC: TCReceived.value ? TCReceived.value : "",
    Document: OtherDocument.value ? OtherDocument.value : "",
    Status: OtherRemark.value ? OtherRemark.value : "",
    Image: "",
    AdmissionFee: "",
    SchoolFee: "",
    TotalFee: "",
    BalanceFee: "",
    Discount: "",
    Installment_1ST: "",
    Installment_1ST_Date: "",
    Installment_2ND: "",
    Installment_2ND_Date: "",
    Installment_3RD: "",
    Installment_3RD_Date: "",
    Installment_4TH: "",
    Installment_4TH_Date: "",
  };

  const addStudent = async () => {
    let postResult = await fetch(postUrl, {
      method: "POST",
      body: JSON.stringify(formDataObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    postResult = await postResult.json();
  };
  alert("Student Data Save Successfully");
  return addStudent();
}

updateDOM();

NewStudent.addEventListener("submit", addRecord);
SearchBtn.addEventListener("click", getData);
Update.addEventListener("click", updateData);
GetData.addEventListener("click", studentFeeList);
Registration.addEventListener("click", displayRegistration);
FeeSubmit.addEventListener("click", displayFeeSubmit);
FeeData.addEventListener("click", displayFeeData);
Back.addEventListener("click", backTo);
LogInBtn.addEventListener("click", logIn);
LogOutBtn.addEventListener("click", logOut);
