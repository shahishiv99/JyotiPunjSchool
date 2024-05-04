const Sl = document.getElementById("sl");
const Sr = document.getElementById("sr");
const srElSearchAdmissionForm = document.getElementById(
  "srElSearchAdmissionForm"
);
const srElSearchAdmissionTc = document.getElementById("srElSearchAdmissionTc");
const srElAdmissionNumberShow = document.getElementById(
  "srElAdmissionNumberShow"
);
const admissionNumber = document.getElementById("admissionNumber");
const srElSearchFeesReceipt = document.getElementById("srElSearchFeesReceipt");
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
const PenNumberEl = document.getElementById("penNumberEl");
const HeightEl = document.getElementById("heightEl");
const WeightEl = document.getElementById("weightEl");
const BloodGroupEl = document.getElementById("bloodGroupEl");
const NationalityEl = document.getElementById("nationalityEl");
const VillageEl = document.getElementById("villageEl");
const SectionEL = document.getElementById("section");
const HouseName = document.getElementById("houseName");
const DoaEl = document.getElementById("doa");
const ReligionEL = document.getElementById("religion");
const CategoryEl = document.getElementById("category");
const schoolFeeEl = document.getElementById("schoolFeeEl");
const admissionFeeEl = document.getElementById("admissionFeeEl");
const CasteEl = document.getElementById("caste");
const TransportFeeEl = document.getElementById("transportFeeEl");
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
const Ins_5 = document.getElementById("InstallmentAmount5");
const Ins_5_Date = document.getElementById("InstallmentDate5");
const Ins_6 = document.getElementById("InstallmentAmount6");
const Ins_6_Date = document.getElementById("InstallmentDate6");
const Ins_7 = document.getElementById("InstallmentAmount7");
const Ins_7_Date = document.getElementById("InstallmentDate7");
const Ins_8 = document.getElementById("InstallmentAmount8");
const Ins_8_Date = document.getElementById("InstallmentDate8");
const Admission_Fee = document.getElementById("admissionFee");
const School_Fees = document.getElementById("schoolFees");
const Total_Fee = document.getElementById("totalAmount");
const Discount_Fee = document.getElementById("discount");
const Balance_Fee = document.getElementById("balanceAmount");
const GetData = document.getElementById("getData");
const Update = document.getElementById("update");
const Registration = document.getElementById("registration");
const FileUploads = document.getElementById("addFiles");
const FeeSubmit = document.getElementById("feeSubmit");
const FeeData = document.getElementById("feeData");
const AdmissionForm = document.getElementById("admissionForm");
const Uploads = document.getElementById("uploads");
const SchoolFee = document.getElementById("schoolFee");
const Transport_Fee = document.getElementById("transport_Fee");
const StudentFeeListEL = document.getElementById("studentFeeListEl");
const profilePic = document.getElementById("profilePic");
const documentPic = document.getElementById("documentPic");
const Profile_Picture = document.getElementById("Profile_Picture");
const Document_Picture = document.getElementById("Document_Picture");
const Back = document.getElementById("back");
const LogInBtn = document.getElementById("logInBtn");
const SignIn = document.getElementById("signIn");
const Content = document.getElementById("content");
const LogOutBtn = document.getElementById("logOut");
const Menubar = document.getElementById("menubar");
const MainMenu = document.getElementById("main-menu");
const Body = document.getElementById("body");
const IdCard = document.getElementById("IdCard");
const IdCardEL = document.getElementById("id-card");
// const ResultEl = document.getElementById("");
// const SessionEl = document.getElementById("");
// const SubjectOfferedEl = document.getElementById("");
const ReportCard = document.getElementById("ReportCard");
const ReportCardEl = document.getElementById("report-card");
const TC = document.getElementById("TransferCertificate");
const tcEL = document.getElementById("tc");
const printTCEL = document.getElementById("TC-Print");
const result_Nto2 = document.getElementById("result_Nto2");
const result_3to8 = document.getElementById("result_3to8");
const result_9 = document.getElementById("result_9");
const result_11 = document.getElementById("result_11");
const resultNto2El = document.getElementById("resultNto2");
const result3to8El = document.getElementById("result3to8");
const result9El = document.getElementById("result9");
const result11El = document.getElementById("result11");
const printReport_Card_Btn = document.getElementById("printReport_Card_Btn");
const print_ID_Btn = document.getElementById("print_ID_Btn");
const ViewDataBtn = document.getElementById("viewDataBtn");
const PaidAmountEl = document.getElementById("PaidAmount");
const updateStudentData = document.getElementById("updateStudentData");
const profilePicShow = document.getElementById("profilePicShow");
const documentShow = document.getElementById("documentShow");
const photoSearchBySr = document.getElementById("photoSearchBySr");
const photoSrElAdmissionNumberShow = document.getElementById(
  "photoSrElAdmissionNumberShow"
);
// const getSearchBySr = document.getElementById("getSearchBySr");
const headTc = document.getElementById("headTc");
const studentNameTc = document.getElementById("studentNameTc");
const motherNameTc = document.getElementById("motherNameTc");
const fatherNameTc = document.getElementById("fatherNameTc");
const nationalityTc = document.getElementById("nationalityTc");
const categoryTc = document.getElementById("categoryTc");
const DobTc = document.getElementById("DobTc");
const classTc = document.getElementById("classTc");
const subjectOfferedTc = document.getElementById("subjectOfferedTc");
const failedYesNoTc = document.getElementById("failedYesNoTc");
const DoaTc = document.getElementById("DoaTc");
const promotionYesNoTc = document.getElementById("promotionYesNoTc");
const feesConcessionTc = document.getElementById("feesConcessionTc");
const duesClearTc = document.getElementById("duesClearTc");
const conTc = document.getElementById("conTc");
const saveTC = document.getElementById("saveTC");
const photoStudentNameEl = document.getElementById("photoStudentNameEl");
const photoDOB = document.getElementById("photoDOB");
const photoPenNumberEl = document.getElementById("photoPenNumberEl");
const photoGender = document.getElementById("photoGender");
const photoViewDataBtn = document.getElementById("photoViewDataBtn");
const photoFatherNameEl = document.getElementById("photoFatherNameEl");
const photoMotherNameEl = document.getElementById("photoMotherNameEl");
const photoClassEl = document.getElementById("photoClassEl");
const uploadFiles = document.getElementById("uploadFiles");
const todayCollection = document.getElementById("todayCollection");
const TodayCollection = document.getElementById("TodayCollection");
const PrintFeeBtn = document.getElementById("printFeeBtn");
const Village = document.getElementById("village");
const PenNumber = document.getElementById("penNumber");
const searchDate = document.getElementById("getDataByData");
let table = document.getElementById("myTable");

// API KEYS
const url = "https://3.110.177.153:5000/data";
const oneData = "https://3.110.177.153:5000/data/:_id";
const postUrl = "https://3.110.177.153:5000/data/post";
// const postPhotoUploadUrl = "https://127.0.0.1:5000/photo";
// Image
const PostDocument = "https://3.110.177.153:5000/Documents";
// Document
const postPhoto = "https://3.110.177.153:5000/photo";
const putUrl = "https://3.110.177.153:5000/data/put/:_id";
const patchUrl = "https://3.110.177.153:5000/data/patch/:_id";
const deleteUrl = "https://3.110.177.153:5000/data/delete/:_id";
const loginUrl = "https://3.110.177.153:5000/login";

let toggle = true;
let filterSR;
let filterSRValue = false;

function paidAmount(a, b, c, d, e, f, g, h) {
  try {
    const sum = a + b + c + d + e + f + g + h;
    // console.log(sum);
    return sum;
  } catch (error) {
    alert("An error", error.message);
  }
}

function dueAmount(a, b, c) {
  try {
    const due = a - b - c;
    // console.log(due);
    return due;
  } catch (error) {
    alert("An Error", error.message);
  }
}

function totalAmount(a, b, c) {
  try {
    const total = a + b + c;
    return total;
  } catch (error) {
    alert("An Error", error.message);
  }
}

// Filter ONE DATA BY SR Start
async function searchSingleDataBySr() {
  const getResponse = await fetch(url);
  const getResult = await getResponse.json();
  const data = getResult;
  try {
    for (let i = 0; i < data.length; i++) {
      let sr = data[i].SR;
      let findSr = filterSR;
      if (findSr.toString() === sr.toString()) {
        filterSRValue = true;
        return singleData(data[i]);
      }
    }
    function singleData(filterOneStudent) {
      return filterOneStudent;
    }
    singleData();
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

// HomePageShow
function home() {
  try {
    Content.classList.remove("display");
    Back.classList.add("display");
    AdmissionForm.classList.add("display");
    SchoolFee.classList.add("display");
    StudentFeeListEL.classList.add("display");
    SignIn.classList.add("display");
    IdCardEL.classList.add("display");
    tcEL.classList.add("display");
    ReportCardEl.classList.add("display");
    todayCollection.classList.add("display");
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

// DOM Update
function updateDOM() {
  try {
    if (localStorage.getItem("user")) {
      activeUser = JSON.parse(localStorage.getItem("user"));
      if (activeUser._id) {
        home();
        return;
      }
    }
  } catch (error) {
    alert("An Error", error.message);
  }
}

// Log In Function Start
async function logIn() {
  let userId = document.getElementById("userId").value;
  let password = document.getElementById("pass").value;
  try {
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
      alert("WELCOME TO THE JPPS");
      home();
      return;
    } else {
      alert("Please Check UserId and Password");
    }
  } catch (error) {
    alert("An Error", error.message);
  }
}

// Log Out Function Start

function logOut() {
  try {
    localStorage.clear();
    Content.classList.add("display");
    Back.classList.add("display");
    IdCardEL.classList.add("display");
    AdmissionForm.classList.add("display");
    SchoolFee.classList.add("display");
    StudentFeeListEL.classList.add("display");
    SignIn.classList.remove("display");
    Uploads.classList.add("display");
    todayCollection.classList.add("display");
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

// Button Function Start
function result_Nto2Show() {
  try {
    result_Nto2.classList.replace("btn-warning", "btn-primary");
    resultNto2El.classList.remove("display");
    result3to8El.classList.add("display");
    result9El.classList.add("display");
    result11El.classList.add("display");
    result_3to8.classList.replace("btn-primary", "btn-warning");
    result_9.classList.replace("btn-primary", "btn-warning");
    result_11.classList.replace("btn-primary", "btn-warning");
  } catch (error) {
    alert("An Error", error.message);
  }
}

function result_3to8Show() {
  try {
    result_3to8.classList.replace("btn-warning", "btn-primary");
    result3to8El.classList.remove("display");
    resultNto2El.classList.add("display");
    result9El.classList.add("display");
    result11El.classList.add("display");
    result_9.classList.replace("btn-primary", "btn-warning");
    result_11.classList.replace("btn-primary", "btn-warning");
    result_Nto2.classList.replace("btn-primary", "btn-warning");
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

function result_9Show() {
  try {
    result_9.classList.replace("btn-warning", "btn-primary");
    result9El.classList.remove("display");
    resultNto2El.classList.add("display");
    result3to8El.classList.add("display");
    result11El.classList.add("display");
    result_3to8.classList.replace("btn-primary", "btn-warning");
    result_11.classList.replace("btn-primary", "btn-warning");
    result_Nto2.classList.replace("btn-primary", "btn-warning");
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

function result_11Show() {
  try {
    result_11.classList.replace("btn-warning", "btn-primary");
    result11El.classList.remove("display");
    resultNto2El.classList.add("display");
    result3to8El.classList.add("display");
    result9El.classList.add("display");
    result_3to8.classList.replace("btn-primary", "btn-warning");
    result_9.classList.replace("btn-primary", "btn-warning");
    result_Nto2.classList.replace("btn-primary", "btn-warning");
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

function backTo() {
  try {
    Back.classList.add("display");
    AdmissionForm.classList.add("display");
    SchoolFee.classList.add("display");
    StudentFeeListEL.classList.add("display");
    SignIn.classList.add("display");
    Content.classList.remove("display");
    IdCardEL.classList.add("display");
    tcEL.classList.add("display");
    ReportCardEl.classList.add("display");
    Uploads.classList.add("display");
    todayCollection.classList.add("display");
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

function displayRegistration() {
  try {
    AdmissionForm.classList.remove("display");
    Back.classList.remove("display");
    SchoolFee.classList.add("display");
    StudentFeeListEL.classList.add("display");
    SignIn.classList.add("display");
    IdCardEL.classList.add("display");
    Content.classList.remove("display");
    tcEL.classList.add("display");
    ReportCardEl.classList.add("display");
    Uploads.classList.add("display");
    todayCollection.classList.add("display");
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

function displayUploads() {
  try {
    AdmissionForm.classList.add("display");
    Uploads.classList.remove("display");
    Back.classList.remove("display");
    SchoolFee.classList.add("display");
    todayCollection.classList.add("display");
    StudentFeeListEL.classList.add("display");
    SignIn.classList.add("display");
    IdCardEL.classList.add("display");
    Content.classList.remove("display");
    tcEL.classList.add("display");
    ReportCardEl.classList.add("display");
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

function displayTodayCollection() {
  try {
    SchoolFee.classList.add("display");
    Content.classList.remove("display");
    Back.classList.remove("display");
    todayCollection.classList.remove("display");
    StudentFeeListEL.classList.add("display");
    SignIn.classList.add("display");
    IdCardEL.classList.add("display");
    AdmissionForm.classList.add("display");
    tcEL.classList.add("display");
    ReportCardEl.classList.add("display");
    Uploads.classList.add("display");
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

function displayFeeSubmit() {
  try {
    SchoolFee.classList.remove("display");
    Content.classList.remove("display");
    Back.classList.remove("display");
    StudentFeeListEL.classList.add("display");
    SignIn.classList.add("display");
    todayCollection.classList.add("display");
    IdCardEL.classList.add("display");
    AdmissionForm.classList.add("display");
    tcEL.classList.add("display");
    ReportCardEl.classList.add("display");
    Uploads.classList.add("display");
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

function displayFeeData() {
  try {
    StudentFeeListEL.classList.remove("display");
    Content.classList.remove("display");
    Back.classList.remove("display");
    SignIn.classList.add("display");
    IdCardEL.classList.add("display");
    AdmissionForm.classList.add("display");
    SchoolFee.classList.add("display");
    tcEL.classList.add("display");
    Uploads.classList.add("display");
    todayCollection.classList.add("display");
    ReportCardEl.classList.add("display");
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

function displayIdCard() {
  try {
    StudentFeeListEL.classList.add("display");
    Content.classList.remove("display");
    Back.classList.remove("display");
    SignIn.classList.add("display");
    IdCardEL.classList.remove("display");
    AdmissionForm.classList.add("display");
    SchoolFee.classList.add("display");
    tcEL.classList.add("display");
    ReportCardEl.classList.add("display");
    Uploads.classList.add("display");
    todayCollection.classList.add("display");
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

function displayTC() {
  try {
    StudentFeeListEL.classList.add("display");
    Content.classList.remove("display");
    Back.classList.remove("display");
    SignIn.classList.add("display");
    IdCardEL.classList.add("display");
    AdmissionForm.classList.add("display");
    SchoolFee.classList.add("display");
    tcEL.classList.remove("display");
    ReportCardEl.classList.add("display");
    Uploads.classList.add("display");
    todayCollection.classList.add("display");
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

function displayReportCard() {
  try {
    StudentFeeListEL.classList.add("display");
    Content.classList.remove("display");
    Back.classList.remove("display");
    SignIn.classList.add("display");
    IdCardEL.classList.add("display");
    AdmissionForm.classList.add("display");
    SchoolFee.classList.add("display");
    tcEL.classList.add("display");
    ReportCardEl.classList.remove("display");
    Uploads.classList.add("display");
    todayCollection.classList.add("display");
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

function menuBar() {
  try {
    if (toggle === true) {
      MainMenu.classList.add("expandedMenu");
      MainMenu.classList.add("change");
      Body.classList.add("expandSidebar");
      toggle = false;
      return;
    } else {
      MainMenu.classList.remove("expandedMenu");
      MainMenu.classList.remove("change");
      Body.classList.remove("expandSidebar");
      toggle = true;
      return;
    }
  } catch (error) {
    alert("An Error", error.message);
  }
}

function photoFilterData() {
  try {
    filterSR = photoSearchBySr.value;
    if (photoSearchBySr.value.length > 0) {
      photoSrElAdmissionNumberShow.value = photoSearchBySr.value;
      async function xyz() {
        const data = await searchSingleDataBySr();
        try {
          if (filterSRValue === true) {
            photoSrElAdmissionNumberShow.value = data.SR;
            photoStudentNameEl.value = data.Name.toUpperCase();
            photoDOB.value = data.DOB;
            photoPenNumberEl.value = data.PenNumber;
            photoGender.value = data.Gender;
            photoFatherNameEl.value = data.FName.toUpperCase();
            photoMotherNameEl.value = data.MName.toUpperCase();
            photoClassEl.value = data.Class.toUpperCase();
            filterSRValue = false;
            function photoUpload() {
              // Create FormData for the first file
              const Photofile = Profile_Picture.files[0];
              const formDataPhoto = new FormData();
              formDataPhoto.append("Image", Photofile);
              // console.log(formData)
              // Create FormData for the second file
              const Documentfile = Document_Picture.files[0];
              const formDataDocument = new FormData();
              formDataDocument.append("DocumentFile", Documentfile);
              // Make a POST request to the server using Fetch API
              fetch(postPhoto, {
                method: "POST",
                body: formDataPhoto,
              })
                .then((responsePhoto) => responsePhoto.json())
                .then((photoData) => {
                  // Handle the response from the server
                  // console.log(photoData);
                  const imageUpload = {
                    Image: {
                      url: photoData.url,
                      display_name: photoData.display_name,
                      original_filename: photoData.original_filename,
                    },
                  };

                  fetch(`${url}/patch/${data._id}`, {
                    method: "PATCH",
                    body: JSON.stringify(imageUpload),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  });
                  // Make a POST request to the server using Fetch API
                  fetch(PostDocument, {
                    method: "POST",
                    body: formDataDocument,
                  })
                    .then((responseDocument) => responseDocument.json())
                    .then((DocumentData) => {
                      // Handle the response from the server
                      // console.log(DocumentPhoto);
                      const DocumentUpload = {
                        DocumentFile: {
                          url: DocumentData.url,
                          display_name: DocumentData.display_name,
                          original_filename: DocumentData.original_filename,
                        },
                      };
                      fetch(`${url}/patch/${data._id}`, {
                        method: "PATCH",
                        body: JSON.stringify(DocumentUpload),
                        headers: {
                          "Content-Type": "application/json",
                        },
                      });
                    })
                    .catch((errorDocument) => {
                      console.error("Error:", errorDocument);
                      alert("Error Document 2020");
                    });
                })
                .catch((errorPhoto) => {
                  console.error("Error:", errorPhoto);
                  alert("Error Photo 2020");
                });
              alert("Successfully Uploaded!");
            }
            uploadFiles.addEventListener("click", photoUpload);
            return;
          } else {
            photoSrElAdmissionNumberShow.value = "";
            photoStudentNameEl.value = "";
            photoDOB.value = "";
            photoPenNumberEl.value = "";
            photoGender.value = "";
            photoFatherNameEl.value = "";
            photoMotherNameEl.value = "";
            photoClassEl.value = "";
            alert("Data Not Found! (Please Enter a Valid SR NUMBER)");
            return;
          }
        } catch (error) {
          alert("An Error", error.message);
        }
      }
      xyz();
    }
    photoSearchBySr.value = "";
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

function showProfile() {
  try {
    // console.log(Profile_Picture.files);
    profilePic.src = URL.createObjectURL(Profile_Picture.files[0]);
    try {
      function app() {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          return img(reader.result);
        });
      }
    } catch (error) {
      alert("An Error", error.message);
    }
    app();
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

function showDocument() {
  try {
    documentPic.src = "images/pdfok.png";
    // console.log(Document_Picture.value);
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

// FILTER AND ADD STUDENT DATA
function filterData(studentDataX) {
  filterSR = srElSearchAdmissionForm.value || studentDataX;
  if (filterSR > 0) {
    srElAdmissionNumberShow.value = filterSR;
    // console.log(filterSR);
    async function xyz() {
      const data = await searchSingleDataBySr();
      if (filterSRValue === true) {
        srElAdmissionNumberShow.value = data.SR;
        if (srElAdmissionNumberShow.value.length > 0) {
          srElAdmissionNumberShow.setAttribute("disabled", true);
        }
        DobEl.value = data.DOB;
        if (DobEl.value.length > 0) {
          DobEl.setAttribute("disabled", true);
        }
        StudentNameEl.value = data.Name.toUpperCase();
        if (StudentNameEl.value.length > 0) {
          StudentNameEl.setAttribute("disabled", true);
        }
        GenderEl.value = data.Gender;
        if (GenderEl.value.length > 0) {
          GenderEl.setAttribute("disabled", true);
        }
        FatherNameEl.value = data.FName.toUpperCase();
        if (FatherNameEl.value.length > 0) {
          FatherNameEl.setAttribute("disabled", true);
        }
        MotherNameEl.value = data.MName.toUpperCase();
        if (MotherNameEl.value.length > 0) {
          MotherNameEl.setAttribute("disabled", true);
        }
        ClassEl.value = data.Class.toUpperCase();
        if (ClassEl.value.length > 0) {
          ClassEl.setAttribute("disabled", true);
        }
        PenNumberEl.value = data.PenNumber.toUpperCase();
        if (PenNumberEl.value.length > 0) {
          PenNumberEl.setAttribute("disabled", true);
        }
        HeightEl.value = data.Height.toUpperCase();
        if (HeightEl.value.length > 0) {
          HeightEl.setAttribute("disabled", true);
        }
        WeightEl.value = data.Weight.toUpperCase();
        if (WeightEl.value.length > 0) {
          WeightEl.setAttribute("disabled", true);
        }
        BloodGroupEl.value = data.BloodGroup.toUpperCase();
        if (BloodGroupEl.value.length > 0) {
          BloodGroupEl.setAttribute("disabled", true);
        }
        NationalityEl.value = data.Nationality.toUpperCase();
        if (NationalityEl.value.length > 0) {
          NationalityEl.setAttribute("disabled", true);
        }
        VillageEl.value = data.Village.toUpperCase();
        if (VillageEl.value.length > 0) {
          VillageEl.setAttribute("disabled", true);
        }
        SectionEL.value = data.Section.toUpperCase();
        if (SectionEL.value.length > 0) {
          SectionEL.setAttribute("disabled", true);
        }
        HouseName.value = data.House.toUpperCase();
        if (HouseName.value.length > 0) {
          HouseName.setAttribute("disabled", true);
        }
        DoaEl.value = data.DOA;
        if (DoaEl.value.length > 0) {
          DoaEl.setAttribute("disabled", true);
        }
        ReligionEL.value = data.Religion.toUpperCase();
        if (ReligionEL.value.length > 0) {
          ReligionEL.setAttribute("disabled", true);
        }
        CategoryEl.value = data.Category.toUpperCase();
        if (CategoryEl.value.length > 0) {
          CategoryEl.setAttribute("disabled", true);
        }
        CasteEl.value = data.Caste.toUpperCase();
        if (CasteEl.value.length > 0) {
          CasteEl.setAttribute("disabled", true);
        }
        LocalAddress.value = data.LAddress.toUpperCase();
        if (LocalAddress.value.length > 0) {
          LocalAddress.setAttribute("disabled", true);
        }
        PermanentAddress.value = data.PAddress.toUpperCase();
        if (PermanentAddress.value.length > 0) {
          PermanentAddress.setAttribute("disabled", true);
        }
        MobileNumber.value = Number(data.Mobile1);
        if (MobileNumber.value.length > 0) {
          MobileNumber.setAttribute("disabled", true);
        }
        AlternateMobile.value = Number(data.Mobile2);
        AadharCardNumber.value = Number(data.Aadhar);
        if (AadharCardNumber.value.length > 0) {
          AadharCardNumber.setAttribute("disabled", true);
        }
        admissionFeeEl.value = Number(data.AdmissionFee);
        if (admissionFeeEl.value > 0) {
          admissionFeeEl.setAttribute("disabled", true);
        }
        schoolFeeEl.value = Number(data.SchoolFee);
        if (schoolFeeEl.value > 0) {
          schoolFeeEl.setAttribute("disabled", true);
        }
        TransportFeeEl.value = Number(data.TransportFee);
        if (TransportFeeEl.value > 0) {
          TransportFeeEl.setAttribute("disabled", true);
        }
        TCReceived.value = data.TC;
        if (TCReceived.value === "Yes") {
          TCReceived.setAttribute("disabled", true);
        }
        OtherDocument.value = data.Document.toUpperCase();
        OtherRemark.value = data.Status.toUpperCase();
        photoShow.classList.remove("display");
        documentShow.classList.remove("display");
        profilePicShow.setAttribute("src", data.Image.url);
        documentView.setAttribute("href", data.DocumentFile.url);
        filterSRValue = false;
        return;
      } else {
        photoShow.classList.add("display");
        documentShow.classList.add("display");
        if (DobEl.value.length > 0) {
          DobEl.removeAttribute("disabled");
          DobEl.value = "";
        }
        if (StudentNameEl.value.length > 0) {
          StudentNameEl.removeAttribute("disabled");
          StudentNameEl.value = "";
        }
        if (GenderEl.value.length > 0) {
          GenderEl.removeAttribute("disabled");
          GenderEl.value = "Selected";
        }
        if (FatherNameEl.value.length > 0) {
          FatherNameEl.removeAttribute("disabled");
          FatherNameEl.value = "";
        }
        if (MotherNameEl.value.length > 0) {
          MotherNameEl.removeAttribute("disabled");
          MotherNameEl.value = "";
        }
        if (ClassEl.value.length > 0) {
          ClassEl.removeAttribute("disabled");
          ClassEl.value = "";
        }
        if (PenNumberEl.value.length > 0) {
          PenNumberEl.removeAttribute("disabled");
          PenNumberEl.value = "";
        }
        if (HeightEl.value.length > 0) {
          HeightEl.removeAttribute("disabled");
          HeightEl.value = "";
        }
        if (WeightEl.value.length > 0) {
          WeightEl.removeAttribute("disabled");
          WeightEl.value = "";
        }
        if (BloodGroupEl.value.length > 0) {
          BloodGroupEl.removeAttribute("disabled");
          BloodGroupEl.value = "";
        }
        if (NationalityEl.value.length > 0) {
          NationalityEl.removeAttribute("disabled");
          NationalityEl.value = "";
        }
        if (VillageEl.value.length > 0) {
          VillageEl.removeAttribute("disabled");
          VillageEl.value = "";
        }
        if (SectionEL.value.length > 0) {
          SectionEL.removeAttribute("disabled");
          SectionEL.value = "";
        }
        if (HouseName.value.length > 0) {
          HouseName.removeAttribute("disabled");
          HouseName.value = "";
        }
        if (DoaEl.value.length > 0) {
          DoaEl.removeAttribute("disabled");
          DoaEl.value = "";
        }
        if (ReligionEL.value.length > 0) {
          ReligionEL.removeAttribute("disabled");
          ReligionEL.value = "";
        }
        if (CategoryEl.value.length > 0) {
          CategoryEl.removeAttribute("disabled");
          CategoryEl.value = "Selected";
        }
        if (CasteEl.value.length > 0) {
          CasteEl.removeAttribute("disabled");
          CasteEl.value = "";
        }
        if (LocalAddress.value.length > 0) {
          LocalAddress.removeAttribute("disabled");
          LocalAddress.value = "";
        }
        if (PermanentAddress.value.length > 0) {
          PermanentAddress.removeAttribute("disabled");
          PermanentAddress.value = "";
        }
        if (MobileNumber.value.length > 0) {
          MobileNumber.removeAttribute("disabled");
          MobileNumber.value = "";
        }
        if (AlternateMobile.value.length > 0) {
          AlternateMobile.removeAttribute("disabled");
          AlternateMobile.value = "";
        }
        if (AadharCardNumber.value.length > 0) {
          AadharCardNumber.removeAttribute("disabled");
          AadharCardNumber.value = "";
        }
        if (TCReceived.value.length > 0) {
          TCReceived.removeAttribute("disabled");
          TCReceived.value = "Selected";
        }
        if (admissionFeeEl.value.length > 0) {
          admissionFeeEl.removeAttribute("disabled");
          admissionFeeEl.value = "";
        }
        if (schoolFeeEl.value.length > 0) {
          schoolFeeEl.removeAttribute("disabled");
          schoolFeeEl.value = "";
        }
        if (TransportFeeEl.value.length > 0) {
          TransportFeeEl.removeAttribute("disabled");
          TransportFeeEl.value = "";
        }
        OtherDocument.value = "";
        OtherRemark.value = "";
        // profilePic.setAttribute("src", "images/Profile_Pic.jpg");
        // documentPic.setAttribute("src", "images/pdf.png");
        function addRecord(e) {
          e.preventDefault();
          const formDataObj = {
            SR: srElAdmissionNumberShow.value,
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
            Result: "",
            Session: "",
            SubjectOffered: "",
            Category: CategoryEl.value ? CategoryEl.value : "",
            Caste: CasteEl.value ? CasteEl.value : "",
            Nationality: NationalityEl.value ? NationalityEl.value : "",
            PenNumber: PenNumberEl.value ? PenNumberEl.value : "",
            Height: HeightEl.value ? HeightEl.value : "",
            Weight: WeightEl.value ? WeightEl.value : "",
            BloodGroup: BloodGroupEl.value ? BloodGroupEl.value : "",
            Result: "",
            Session: "",
            SubjectOffered: "",
            Village: VillageEl.value ? VillageEl.value : "",
            LAddress: LocalAddress.value ? LocalAddress.value : "",
            PAddress: PermanentAddress.value ? PermanentAddress.value : "",
            Mobile1: MobileNumber.value ? Number(MobileNumber.value) : "",
            Mobile2: AlternateMobile.value ? Number(AlternateMobile.value) : "",
            Aadhar: AadharCardNumber.value
              ? Number(AadharCardNumber.value)
              : "",
            TC: TCReceived.value ? TCReceived.value : "",
            Document: OtherDocument.value ? OtherDocument.value : "",
            Status: OtherRemark.value ? OtherRemark.value : "",
            Image: { url: "", display_name: "", original_filename: "" },
            DocumentFile: { url: "", display_name: "", original_filename: "" },
            AdmissionFee: admissionFeeEl.value
              ? Number(admissionFeeEl.value)
              : "",
            SchoolFee: schoolFeeEl.value ? Number(schoolFeeEl.value) : "",
            TransportFee: TransportFeeEl.value
              ? Number(TransportFeeEl.value)
              : "",
            TotalFee: "",
            BalanceFee: "",
            Discount: "",
            Result: "",
            PaidAmount: "",
            Installment_1ST: "",
            Installment_1ST_Date: "",
            Installment_2ND: "",
            Installment_2ND_Date: "",
            Installment_3RD: "",
            Installment_3RD_Date: "",
            Installment_4TH: "",
            Installment_4TH_Date: "",
            Installment_5TH: "",
            Installment_5TH_Date: "",
            Installment_6TH: "",
            Installment_6TH_Date: "",
            Installment_7TH: "",
            Installment_7TH_Date: "",
            Installment_8TH: "",
            Installment_8TH_Date: "",
            PT1: {
              Hindi: "",
              English: "",
              Maths: "",
              Science: "",
              Computer: "",
              GK: "",
              Painting: "",
              Biology: "",
              Accountancy: "",
              Chemistry: "",
              Economics: "",
              Physical_Education: "",
              Physics: "",
              Business_Studies: "",
            },
            SubjectEnrichment1: {
              Hindi: "",
              English: "",
              Maths: "",
              Science: "",
              Computer: "",
              GK: "",
              Painting: "",
              Biology: "",
              Accountancy: "",
              Chemistry: "",
              Economics: "",
              Physical_Education: "",
              Physics: "",
              Business_Studies: "",
            },
            HalfYearly: {
              Hindi: "",
              English: "",
              Maths: "",
              Science: "",
              Computer: "",
              GK: "",
              Painting: "",
              Biology: "",
              Accountancy: "",
              Chemistry: "",
              Economics: "",
              Physical_Education: "",
              Physics: "",
              Business_Studies: "",
            },
            HalfYearly_Practical: {
              Hindi: "",
              English: "",
              Maths: "",
              Science: "",
              Computer: "",
              GK: "",
              Painting: "",
              Biology: "",
              Accountancy: "",
              Chemistry: "",
              Economics: "",
              Physical_Education: "",
              Physics: "",
              Business_Studies: "",
            },
            PT2: {
              Hindi: "",
              English: "",
              Maths: "",
              Science: "",
              Computer: "",
              GK: "",
              Painting: "",
              Biology: "",
              Accountancy: "",
              Chemistry: "",
              Economics: "",
              Physical_Education: "",
              Physics: "",
              Business_Studies: "",
            },
            SubjectEnrichment2: {
              Hindi: "",
              English: "",
              Maths: "",
              Science: "",
              Computer: "",
              GK: "",
              Painting: "",
              Biology: "",
              Accountancy: "",
              Chemistry: "",
              Economics: "",
              Physical_Education: "",
              Physics: "",
              Business_Studies: "",
            },
            Annual: {
              Hindi: "",
              English: "",
              Maths: "",
              Science: "",
              Computer: "",
              GK: "",
              Painting: "",
              Biology: "",
              Accountancy: "",
              Chemistry: "",
              Economics: "",
              Physical_Education: "",
              Physics: "",
              Business_Studies: "",
            },
            Annual_Practical: {
              Hindi: "",
              English: "",
              Maths: "",
              Science: "",
              Computer: "",
              GK: "",
              Painting: "",
              Biology: "",
              Accountancy: "",
              Chemistry: "",
              Economics: "",
              Physical_Education: "",
              Physics: "",
              Business_Studies: "",
            },
            StruckOffRollsOfSchool: "",
            ReasonForLeavingSchool: "",
            MaximumNumberOfAttendance: "",
            TotalPresentOfStudent: "",
            Character: "",
            DateOfIssueTC: "",
            UnderGovernmentMinorityIndependentCategory: "",
          };
          var addStudent = async () => {
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
      }
      NewStudent.addEventListener("submit", addRecord);
    }
    xyz();
  }

  srElSearchAdmissionForm.value = "";
  return;
}

// Show TC
function ShowTC() {
  try {
    filterSR = srElSearchAdmissionTc.value;
    if (srElSearchAdmissionTc.value.length > 0) {
      try {
        async function xyz() {
          const data = await searchSingleDataBySr();
          if (filterSRValue === true) {
            let failedYesNoEl = "";
            let promotionYesNoEl = "";
            let duesClearEl = "";
            let feesConcessionEl = "";
            function failedResult() {
              if (data.Result == "PASSED") {
                return (failedYesNoEl = "NO");
              } else failedYesNoEl = "YES";
            }
            function promotionYesNoResult() {
              if (data.Result == "PASSED") {
                return (promotionYesNoEl = "YES");
              } else promotionYesNoEl = "NO";
            }
            function duesClearResult() {
              if (data.BalanceFee == 0) {
                return (duesClearEl = "YES");
              } else duesClearEl = "NO";
            }
            function feesConcessionResult() {
              if (data.Discount == 0) {
                return (feesConcessionEl = "NO");
              } else feesConcessionEl = "YES";
            }
            promotionYesNoResult();
            failedResult();
            duesClearResult();
            feesConcessionResult();
            if (!data.RegNumber) {
              RegNumberTc.value = "";
            } else {
              RegNumberTc.value = data.RegNumber;
            }
            admissionNumber.value = data.SR;
            studentNameTc.value = data.Name.toUpperCase();
            fatherNameTc.value = data.FName.toUpperCase();
            motherNameTc.value = data.MName.toUpperCase();
            nationalityTc.value = data.Nationality.toUpperCase();
            categoryTc.value = data.Category.toUpperCase();
            DobTc.value = data.DOB;
            resultTc.value = data.Result;
            subjectOfferedTc.value = data.SubjectOffered;
            failedYesNoTc.value = failedYesNoEl;
            promotionYesNoTc.value = promotionYesNoEl;
            duesClearTc.value = duesClearEl;
            classTc.value = data.Class.toUpperCase();
            feesConcessionTc.value = feesConcessionEl;
            nccTc.value = data.NationalCadetCore;
            PenNumberEl.value = data.PenNumber.toUpperCase();
            DoaTc.value = data.DOA;
            removeStudentDateTc.value = data.StruckOffRollsOfSchool;
            if (removeStudentDateTc.value.length > 0) {
              removeStudentDateTc.setAttribute("disabled", true);
            }
            if (reasonSchoolLeavingTc.value.length > 0) {
              reasonSchoolLeavingTc.setAttribute("disabled", true);
            }
            if (numberOfPresentTc.value.length > 0) {
              numberOfPresentTc.setAttribute("disabled", true);
            }
            if (totalAttendanceTc.value.length > 0) {
              totalAttendanceTc.setAttribute("disabled", true);
            }
            if (dateOfIssueCertificateTc.value.length > 0) {
              dateOfIssueCertificateTc.setAttribute("disabled", true);
            }
            if (characterTc.value.length > 0) {
              characterTc.setAttribute("disabled", true);
            }
            underCategoryIndependentTc.value = data.underCategoryIndependentTc;
            if (underCategoryIndependentTc.value.length > 0) {
              underCategoryIndependentTc.setAttribute("disabled", true);
            }
            filterSRValue = false;
            return;
          } else {
            RegNumberTc.value = "";
            admissionNumber.value = "";
            studentNameTc.value = "";
            fatherNameTc.value = "";
            motherNameTc.value = "";
            nationalityTc.value = "";
            categoryTc.value = "";
            DobTc.value = "";
            resultTc.value = "";
            subjectOfferedTc.value = "";
            failedYesNoTc.value = "";
            promotionYesNoTc.value = "";
            duesClearTc.value = "";
            classTc.value = "";
            feesConcessionTc.value = "";
            nccTc.value = "";
            PenNumberEl.value = "";
            DoaTc.value = "";
            removeStudentDateTc.value = "";
            reasonSchoolLeavingTc.value = "";
            numberOfPresentTc.value = "";
            totalAttendanceTc.value = "";
            dateOfIssueCertificateTc.value = "";
            characterTc.value = "";
            underCategoryIndependentTc = "";
            alert("No Record Found");
            return;
          }
        }
        xyz();
        return;
      } catch (error) {
        alert("An Error", error.message);
      }
    }
    srElSearchAdmissionTc.value = "";
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

function ShowIns() {
  try {
    Ins_1.removeAttribute("disabled");
    Ins_1_Date.removeAttribute("disabled");
    Ins_2.setAttribute("disabled", true);
    Ins_2_Date.setAttribute("disabled", true);
    Ins_3.setAttribute("disabled", true);
    Ins_3_Date.setAttribute("disabled", true);
    Ins_4.setAttribute("disabled", true);
    Ins_4_Date.setAttribute("disabled", true);
    Ins_5.setAttribute("disabled", true);
    Ins_5_Date.setAttribute("disabled", true);
    Ins_6.setAttribute("disabled", true);
    Ins_6_Date.setAttribute("disabled", true);
    Ins_7.setAttribute("disabled", true);
    Ins_7_Date.setAttribute("disabled", true);
    Ins_8.setAttribute("disabled", true);
    Ins_8_Date.setAttribute("disabled", true);
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

// SHOW FEE DATA
function showFeeData(StudentSrNumber) {
  try {
    filterSR = srElSearchFeesReceipt.value || StudentSrNumber;
    if (!filterSR) {
      alert("Please Enter SR Number");
      return;
    } else {
      async function xyz() {
        const data = await searchSingleDataBySr();
        ShowIns();
        Discount_Fee.removeAttribute("disabled", true);
        if (filterSRValue === true) {
          Sr.value = data.SR;
          StudentName.value = data.Name.toUpperCase();
          FatherName.value = data.FName.toUpperCase();
          MotherName.value = data.MName.toUpperCase();
          PenNumber.value = data.PenNumber;
          Village.value = data.Village.toUpperCase();
          Class.value = data.Class.toUpperCase();
          Ins_1.value = Number(data.Installment_1ST);
          Ins_1_Date.value = data.Installment_1ST_Date;
          Ins_2.value = Number(data.Installment_2ND);
          if (Ins_1.value > 0) {
            Ins_2.removeAttribute("disabled");
            Ins_1.setAttribute("disabled", true);
          } else {
          }
          Ins_2_Date.value = data.Installment_2ND_Date;
          if (Ins_1_Date.value.length > 0) {
            Ins_2_Date.removeAttribute("disabled");
            Ins_1_Date.setAttribute("disabled", true);
          } else {
          }
          Ins_3.value = Number(data.Installment_3RD);
          if (Ins_2.value > 0) {
            Ins_3.removeAttribute("disabled", true);
            Ins_2.setAttribute("disabled", true);
          } else {
          }
          Ins_3_Date.value = data.Installment_3RD_Date;
          if (Ins_2_Date.value.length > 0) {
            Ins_3_Date.removeAttribute("disabled", true);
            Ins_2_Date.setAttribute("disabled", true);
          } else {
          }
          Ins_4.value = Number(data.Installment_4TH);
          if (Ins_3.value > 0) {
            Ins_4.removeAttribute("disabled", true);
            Ins_3.setAttribute("disabled", true);
          } else {
          }
          Ins_4_Date.value = data.Installment_4TH_Date;
          if (Ins_3_Date.value.length > 0) {
            Ins_4_Date.removeAttribute("disabled", true);
            Ins_3_Date.setAttribute("disabled", true);
          } else {
          }
          Ins_5.value = Number(data.Installment_5TH);
          if (Ins_4.value > 0) {
            Ins_5.removeAttribute("disabled", true);
            Ins_4.setAttribute("disabled", true);
          } else {
          }
          Ins_5_Date.value = data.Installment_5TH_Date;
          if (Ins_4_Date.value.length > 0) {
            Ins_5_Date.removeAttribute("disabled", true);
            Ins_4_Date.setAttribute("disabled", true);
          } else {
          }
          Ins_6.value = Number(data.Installment_6TH);
          if (Ins_5.value > 0) {
            Ins_6.removeAttribute("disabled", true);
            Ins_5.setAttribute("disabled", true);
          } else {
          }
          Ins_6_Date.value = data.Installment_6TH_Date;
          if (Ins_5_Date.value.length > 0) {
            Ins_6_Date.removeAttribute("disabled", true);
            Ins_5_Date.setAttribute("disabled", true);
          } else {
          }
          Ins_7.value = Number(data.Installment_7TH);
          if (Ins_6.value > 0) {
            Ins_7.removeAttribute("disabled", true);
            Ins_6.setAttribute("disabled", true);
          } else {
          }
          Ins_7_Date.value = data.Installment_7TH_Date;
          if (Ins_6_Date.value.length > 0) {
            Ins_7_Date.removeAttribute("disabled", true);
            Ins_6_Date.setAttribute("disabled", true);
          } else {
          }
          Ins_8.value = Number(data.Installment_8TH);
          if (Ins_7.value > 0) {
            Ins_8.removeAttribute("disabled", true);
            Ins_7.setAttribute("disabled", true);
          } else {
          }
          Ins_8_Date.value = data.Installment_8TH_Date;
          if (Ins_7_Date.value.length > 0) {
            Ins_8_Date.removeAttribute("disabled", true);
            Ins_7_Date.setAttribute("disabled", true);
          } else {
          }
          Discount_Fee.value = Number(data.Discount);
          if (Discount_Fee.value > 0) {
            Discount_Fee.setAttribute("disabled", true);
          }
          Admission_Fee.value = Number(data.AdmissionFee);
          School_Fees.value = Number(data.SchoolFee);
          Transport_Fee.value = Number(data.TransportFee);
          Total_Fee.value = totalAmount(
            Number(School_Fees.value),
            Number(Admission_Fee.value),
            Number(Transport_Fee.value)
          );
          PaidAmountEl.value = paidAmount(
            Number(Ins_1.value),
            Number(Ins_2.value),
            Number(Ins_3.value),
            Number(Ins_4.value),
            Number(Ins_5.value),
            Number(Ins_6.value),
            Number(Ins_7.value),
            Number(Ins_8.value)
          );
          Balance_Fee.value = dueAmount(
            Number(Total_Fee.value),
            Number(Discount_Fee.value),
            Number(PaidAmountEl.value)
          );
          filterSRValue = false;
          return;
        } else {
          alert("Please Enter a Valid SR Number");
          return;
        }
      }
      xyz();
    }
    srElSearchFeesReceipt.value = "";
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

// Save TC DATA
function saveTcData() {
  try {
    const studentTcData = {
      StruckOffRollsOfSchool: removeStudentDateTc.value,
      ReasonForLeavingSchool: reasonSchoolLeavingTc.value,
      TotalPresentOfStudent: numberOfPresentTc.value,
      MaximumNumberOfAttendance: totalAttendanceTc.value,
      Character: characterTc.value,
      DateOfIssueTC: dateOfIssueCertificateTc.value,
      UnderGovernmentMinorityIndependentCategory:
        underCategoryIndependentTc.value,
    };
    const updateStudentDataTc = async () => {
      const data = await searchSingleDataBySr();
      if (filterSRValue === true) {
        // console.log(data);
        const _id = data._id;
        let putResult = await fetch(`${url}/patch/${_id}`, {
          method: "PATCH",
          body: JSON.stringify(studentTcData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        putResult = await putResult.json();
      }
    };
    alert("Update Data Successfully");
    updateStudentDataTc();
    return;
    // location.reload();
    // displayTC();
  } catch (error) {
    alert("An Error", error.message);
  }
}

// UPDATE STUDENT DATA
function updateStudentRecord() {
  try {
    const studentData = {
      SR: srElAdmissionNumberShow.value,
      DOB: DobEl.value ? DobEl.value : "",
      Name: StudentNameEl.value ? StudentNameEl.value : "",
      Gender: GenderEl.value ? GenderEl.value : "",
      FName: FatherNameEl.value ? FatherNameEl.value : "",
      MName: MotherNameEl.value ? MotherNameEl.value : "",
      Class: ClassEl.value ? ClassEl.value : "",
      PenNumber: PenNumberEl.value ? PenNumberEl.value : "",
      Height: HeightEl.value ? HeightEl.value : "",
      Weight: WeightEl.value ? WeightEl.value : "",
      BloodGroup: BloodGroupEl.value ? BloodGroupEl.value : "",
      Nationality: NationalityEl.value ? NationalityEl.value : "",
      Village: VillageEl.value ? VillageEl.value : "",
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
      AdmissionFee: admissionFeeEl.value ? Number(admissionFeeEl.value) : "",
      SchoolFee: schoolFeeEl.value ? Number(schoolFeeEl.value) : "",
      TransportFee: TransportFeeEl.value ? Number(TransportFeeEl.value) : "",
    };
    const updateStudentData = async () => {
      const data = await searchSingleDataBySr();
      try {
        if (filterSRValue === true) {
          // console.log("Hello");
          const _id = data._id;
          let putResult = await fetch(`${url}/patch/${_id}`, {
            method: "PATCH",
            body: JSON.stringify(studentData),
            headers: {
              "Content-Type": "application/json",
            },
          });
          putResult = await putResult.json();
        }
        return;
      } catch (error) {
        alert("An Error", error.message);
      }
    };
    alert("Update Data Successfully");
    return updateStudentData();
  } catch (error) {
    alert("An Error", error.message);
  }
}

function feesReceiptShow() {
  try {
    switch (true) {
      case Ins_8_Date.value.length > 0:
        document.getElementById("feesReceiptdate").value = Ins_8_Date.value;
        document.getElementById("feesrReceiptTotal").value = Ins_8.value;
        document.getElementById("feesrReceiptInstallment").value = Ins_8.value;
        document.getElementById("feesReceiptStudentName").value =
          StudentName.value;
        document.getElementById("feesReceiptMotherName").value =
          MotherName.value;
        document.getElementById("feesReceiptFatherName").value =
          FatherName.value;
        document.getElementById("feesReceiptClass").value = Class.value;
        document.getElementById("feesReceiptPenNumber").value = PenNumber.value;
        document.getElementById("feesReceiptVillage").value = Village.value;
        document.getElementById("feesrReceiptTotalFees").value =
          Total_Fee.value;
        document.getElementById("feesrReceiptBalance").value =
          Balance_Fee.value;
        document.getElementById("feesrReceiptDiscount").value =
          Discount_Fee.value;
        document.getElementById(
          "feesReceiptId"
        ).value = `2023/24/${Sr.value}/8`;
        break;
      case Ins_7_Date.value.length > 0:
        document.getElementById("feesReceiptdate").value = Ins_7_Date.value;
        document.getElementById("feesrReceiptTotal").value = Ins_7.value;
        document.getElementById("feesrReceiptInstallment").value = Ins_7.value;
        document.getElementById("feesReceiptStudentName").value =
          StudentName.value;
        document.getElementById("feesReceiptMotherName").value =
          MotherName.value;
        document.getElementById("feesReceiptFatherName").value =
          FatherName.value;
        document.getElementById("feesReceiptClass").value = Class.value;
        document.getElementById("feesReceiptPenNumber").value = PenNumber.value;
        document.getElementById("feesReceiptVillage").value = Village.value;
        document.getElementById("feesrReceiptTotalFees").value =
          Total_Fee.value;
        document.getElementById("feesrReceiptBalance").value =
          Balance_Fee.value;
        document.getElementById("feesrReceiptDiscount").value =
          Discount_Fee.value;
        document.getElementById(
          "feesReceiptId"
        ).value = `2023/24/${Sr.value}/7`;
        break;
      case Ins_6_Date.value.length > 0:
        document.getElementById("feesReceiptdate").value = Ins_6_Date.value;
        document.getElementById("feesrReceiptTotal").value = Ins_6.value;
        document.getElementById("feesrReceiptInstallment").value = Ins_6.value;
        document.getElementById("feesReceiptStudentName").value =
          StudentName.value;
        document.getElementById("feesReceiptMotherName").value =
          MotherName.value;
        document.getElementById("feesReceiptFatherName").value =
          FatherName.value;
        document.getElementById("feesReceiptClass").value = Class.value;
        document.getElementById("feesReceiptPenNumber").value = PenNumber.value;
        document.getElementById("feesReceiptVillage").value = Village.value;
        document.getElementById("feesrReceiptTotalFees").value =
          Total_Fee.value;
        document.getElementById("feesrReceiptBalance").value =
          Balance_Fee.value;
        document.getElementById("feesrReceiptDiscount").value =
          Discount_Fee.value;
        document.getElementById(
          "feesReceiptId"
        ).value = `2023/24/${Sr.value}/6`;
        break;
      case Ins_5_Date.value.length > 0:
        document.getElementById("feesReceiptdate").value = Ins_5_Date.value;
        document.getElementById("feesrReceiptTotal").value = Ins_5.value;
        document.getElementById("feesrReceiptInstallment").value = Ins_5.value;
        document.getElementById("feesReceiptStudentName").value =
          StudentName.value;
        document.getElementById("feesReceiptMotherName").value =
          MotherName.value;
        document.getElementById("feesReceiptFatherName").value =
          FatherName.value;
        document.getElementById("feesReceiptClass").value = Class.value;
        document.getElementById("feesReceiptPenNumber").value = PenNumber.value;
        document.getElementById("feesReceiptVillage").value = Village.value;
        document.getElementById("feesrReceiptTotalFees").value =
          Total_Fee.value;
        document.getElementById("feesrReceiptBalance").value =
          Balance_Fee.value;
        document.getElementById("feesrReceiptDiscount").value =
          Discount_Fee.value;
        document.getElementById(
          "feesReceiptId"
        ).value = `2023/24/${Sr.value}/5`;
        break;
      case Ins_4_Date.value.length > 0:
        document.getElementById("feesReceiptdate").value = Ins_4_Date.value;
        document.getElementById("feesrReceiptTotal").value = Ins_4.value;
        document.getElementById("feesrReceiptInstallment").value = Ins_4.value;
        document.getElementById("feesReceiptStudentName").value =
          StudentName.value;
        document.getElementById("feesReceiptMotherName").value =
          MotherName.value;
        document.getElementById("feesReceiptFatherName").value =
          FatherName.value;
        document.getElementById("feesReceiptClass").value = Class.value;
        document.getElementById("feesReceiptPenNumber").value = PenNumber.value;
        document.getElementById("feesReceiptVillage").value = Village.value;
        document.getElementById("feesrReceiptTotalFees").value =
          Total_Fee.value;
        document.getElementById("feesrReceiptBalance").value =
          Balance_Fee.value;
        document.getElementById("feesrReceiptDiscount").value =
          Discount_Fee.value;
        document.getElementById(
          "feesReceiptId"
        ).value = `2023/24/${Sr.value}/4`;
        break;
      case Ins_3_Date.value.length > 0:
        document.getElementById("feesReceiptdate").value = Ins_3_Date.value;
        document.getElementById("feesrReceiptTotal").value = Ins_3.value;
        document.getElementById("feesrReceiptInstallment").value = Ins_3.value;
        document.getElementById("feesReceiptStudentName").value =
          StudentName.value;
        document.getElementById("feesReceiptMotherName").value =
          MotherName.value;
        document.getElementById("feesReceiptFatherName").value =
          FatherName.value;
        document.getElementById("feesReceiptClass").value = Class.value;
        document.getElementById("feesReceiptPenNumber").value = PenNumber.value;
        document.getElementById("feesReceiptVillage").value = Village.value;
        document.getElementById("feesrReceiptTotalFees").value =
          Total_Fee.value;
        document.getElementById("feesrReceiptBalance").value =
          Balance_Fee.value;
        document.getElementById("feesrReceiptDiscount").value =
          Discount_Fee.value;
        document.getElementById(
          "feesReceiptId"
        ).value = `2023/24/${Sr.value}/3`;
        break;
      case Ins_2_Date.value.length > 0:
        document.getElementById("feesReceiptdate").value = Ins_2_Date.value;
        document.getElementById("feesrReceiptTotal").value = Ins_2.value;
        document.getElementById("feesrReceiptInstallment").value = Ins_2.value;
        document.getElementById("feesReceiptStudentName").value =
          StudentName.value;
        document.getElementById("feesReceiptMotherName").value =
          MotherName.value;
        document.getElementById("feesReceiptFatherName").value =
          FatherName.value;
        document.getElementById("feesReceiptClass").value = Class.value;
        document.getElementById("feesReceiptPenNumber").value = PenNumber.value;
        document.getElementById("feesReceiptVillage").value = Village.value;
        document.getElementById("feesrReceiptTotalFees").value =
          Total_Fee.value;
        document.getElementById("feesrReceiptBalance").value =
          Balance_Fee.value;
        document.getElementById("feesrReceiptDiscount").value =
          Discount_Fee.value;
        document.getElementById(
          "feesReceiptId"
        ).value = `2023/24/${Sr.value}/2`;
        break;
      case Ins_1_Date.value.length > 0:
        document.getElementById("feesReceiptdate").value = Ins_1_Date.value;
        document.getElementById("feesrReceiptTotal").value = Ins_1.value;
        document.getElementById("feesrReceiptInstallment").value = Ins_1.value;
        document.getElementById("feesReceiptStudentName").value =
          StudentName.value;
        document.getElementById("feesReceiptMotherName").value =
          MotherName.value;
        document.getElementById("feesReceiptFatherName").value =
          FatherName.value;
        document.getElementById("feesReceiptClass").value = Class.value;
        document.getElementById("feesReceiptPenNumber").value = PenNumber.value;
        document.getElementById("feesReceiptVillage").value = Village.value;
        document.getElementById("feesrReceiptTotalFees").value =
          Total_Fee.value;
        document.getElementById("feesrReceiptBalance").value =
          Balance_Fee.value;
        document.getElementById("feesrReceiptDiscount").value =
          Discount_Fee.value;
        document.getElementById(
          "feesReceiptId"
        ).value = `2023/24/${Sr.value}/1`;
        break;
      case StudentName.value.length > 0:
        document.getElementById("feesReceiptdate").value = Ins_1_Date.value;
        document.getElementById("feesrReceiptTotal").value = Ins_1.value;
        document.getElementById("feesrReceiptInstallment").value = Ins_1.value;
        document.getElementById("feesReceiptStudentName").value =
          StudentName.value;
        document.getElementById("feesReceiptMotherName").value =
          MotherName.value;
        document.getElementById("feesReceiptFatherName").value =
          FatherName.value;
        document.getElementById("feesReceiptClass").value = Class.value;
        document.getElementById("feesReceiptPenNumber").value = PenNumber.value;
        document.getElementById("feesReceiptVillage").value = Village.value;
        document.getElementById("feesrReceiptTotalFees").value =
          Total_Fee.value;
        document.getElementById("feesrReceiptBalance").value =
          Balance_Fee.value;
        document.getElementById("feesrReceiptDiscount").value =
          Discount_Fee.value;
        document.getElementById(
          "feesReceiptId"
        ).value = `2023/24/${Sr.value}/0`;
        break;
      default:
    }
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

// Print Fee Receipt
function printFees() {
  try {
    let body = document.getElementById("print").innerHTML;
    let printFees = document.getElementById("feesReceiptScale").innerHTML;
    document.getElementById("feesReceiptScale").classList.remove("display");
    document.getElementById("print").innerHTML = printFees;
    feesReceiptShow();
    window.print();
    document.getElementById("print").innerHTML = body;
    document.getElementById("feesReceiptScale").classList.add("display");
    location.reload();
    displayFeeSubmit();
    // console.log("Hello");
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

// UPDATE FEE DATA
function updateData() {
  try {
    const feeData = {
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
      Installment_5TH: Ins_5.value,
      Installment_5TH_Date: Ins_5_Date.value,
      Installment_6TH: Ins_6.value,
      Installment_6TH_Date: Ins_6_Date.value,
      Installment_7TH: Ins_7.value,
      Installment_7TH_Date: Ins_7_Date.value,
      Installment_8TH: Ins_8.value,
      Installment_8TH_Date: Ins_8_Date.value,
      PaidAmount: PaidAmountEl.value,
    };
    const updateFeeData = async () => {
      const data = await searchSingleDataBySr();
      try {
        if (filterSRValue === true) {
          const _id = data._id;
          let putResult = await fetch(`${url}/patch/${_id}`, {
            method: "PATCH",
            body: JSON.stringify(feeData),
            headers: {
              "Content-Type": "application/json",
            },
          });
          putResult = await putResult.json();
        }
        return;
      } catch (error) {
        alert("An Error", error.message);
      }
    };
    alert("Update Data Successfully");
    return updateFeeData();
  } catch (error) {
    alert("An Error", error.message);
  }
}

// Print TC
function printTC() {
  try {
    document
      .getElementById("printStyleTc")
      .classList.replace("tcShow", "tcPrint");
    Back.classList.add("display");
    headTc.classList.add("display");
    MainMenu.classList.add("display");
    conTc.classList.add("containerTc");
    saveTC.classList.add("display");
    window.print();
    document
      .getElementById("printStyleTc")
      .classList.replace("tcPrint", "tcShow");
    Back.classList.remove("display");
    headTc.classList.remove("display");
    MainMenu.classList.remove("display");
    printTCEL.classList.remove("display");
    conTc.classList.remove("containerTc");
    saveTC.classList.remove("display");
    displayTC();
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

function myStudentData(y) {
  try {
    // alert(y);
    displayRegistration();
    filterData(y);
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

function myStudentFees(x) {
  try {
    // alert(x);
    displayFeeSubmit();
    showFeeData(x);
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

function myStudentResult() {
  try {
    alert("Hello Shivam");
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

// Change Date Formate
function changeDateFormat(date) {
  try {
    let dateObj = new Date(date);
    // Convert the Date object to a string with the desired format
    let newDateStr = dateObj.toLocaleDateString("en-GB");
    return newDateStr;
  } catch (error) {
    alert("An Error", error.message);
  }
}

function dateArray() {
  try {
    let startDate = document.getElementById("StartDate").value;
    let endDate = document.getElementById("EndDate").value;
    let newDateArray = dateRangeArray(startDate, endDate);
    let NewDatesArray = [];
    for (let i = 0; i < newDateArray.length; i++) {
      let changeDate = changeDateFormat(newDateArray[i]);
      NewDatesArray.push(changeDate);
    }
    // console.log(NewDatesArray);
    // startDate = changeDateFormat(startDate);
    // console.log(startDate);
    return NewDatesArray;
    // console.log(NewDatesArray);
  } catch (error) {
    alert("An Error", error.message);
  }
}

// Filter Date Range
function dateRangeArray(start_date, end_date) {
  try {
    let startDate = new Date(start_date);
    let endDate = new Date(end_date);
    let date_Array = [];
    while (startDate <= endDate) {
      date_Array.push(new Date(startDate).toISOString().slice(0, 10));
      startDate.setDate(startDate.getDate() + 1);
    }

    return date_Array;
  } catch (error) {
    alert("An Error", error.message);
  }
}

// Show Pagination
function Pagination(a) {
  const total_records_tr = a;
  const record_per_page = 50;
  var page_number = 1;
  const total_records = total_records_tr.length;
  const total_page = Math.ceil(total_records / record_per_page);
  function DisplayRecords() {
    let start_index = (page_number - 1) * record_per_page;
    let end_index = start_index + (record_per_page - 1);
    if (end_index >= total_records) {
      end_index = total_records - 1;
    }
    table.innerHTML = "";
    for (let i = start_index; i <= end_index; i++) {
      // console.log(total_records_tr[i]);
      let row = `<tr>
          <td style="text-align: center;">${total_records_tr[i].SR}</td>
          <td style="text-align: center;">${total_records_tr[i].Name}</td>
          <td style="text-align: center;">${total_records_tr[i].FName}</td>
          <td style="text-align: center;">${total_records_tr[i].MName}</td>
          <td style="text-align: center;">${total_records_tr[i].Class}</td>
          <td style="text-align: center;">${total_records_tr[i].Section}</td>
          <td style="text-align: center;">${total_records_tr[i].Mobile1}</td>
          <td style="text-align: center;">${total_records_tr[i].Mobile2}</td>
          <td style="text-align: center;">${total_records_tr[i].PenNumber}</td>
          <td style="text-align: center;">${total_records_tr[i].TotalFee}</td>
          <td style="text-align: center;">${total_records_tr[i].BalanceFee}</td>
          <td style="text-align: center;">${total_records_tr[i].Discount}</td>
          <td style="text-align: center;">${total_records_tr[i].PaidAmount}</td>
          <td style="text-align: center;"><button onclick="myStudentData(${total_records_tr[i].SR})">PROFILE</button></td>
          <td style="text-align: center;"><button onclick="myStudentFees(${total_records_tr[i].SR})">FEES</button></td>
          <td style="text-align: center;"><button onclick="myStudentResult(${total_records_tr[i].SR})">Result</button></td>
        </tr>`;
      table.innerHTML += row;
      document.querySelectorAll(".dynamic-item").forEach((item) => {
        item.classList.remove("active");
      });
      document.getElementById(`page${page_number}`).classList.add("active");
      if (page_number == 1) {
        document
          .getElementById("prevBTN")
          .parentElement.classList.add("disabled");
      } else {
        document
          .getElementById("prevBTN")
          .parentElement.classList.remove("disabled");
      }
      if (page_number == total_page) {
        document
          .getElementById("nextBTN")
          .parentElement.classList.add("disabled");
      } else {
        document
          .getElementById("nextBTN")
          .parentElement.classList.remove("disabled");
      }
    }
  }
  function prevBtn() {
    page_number--;
    DisplayRecords();
  }
  function nextBtn() {
    page_number++;
    DisplayRecords();
  }
  function GoToPage() {
    page_number = document.getElementById("pageGo").value;

    // console.log("Hello");
    DisplayRecords();
  }

  createPageNumber();
  DisplayRecords();

  function createPageNumber() {
    let prevBtn = `<li class="page-item">
    <a class="page-link" href="javascript:void(0)" id="prevBTN">Previous</a></li>`;
    let nextBtn = `<li class="page-item">
    <a class="page-link" href="javascript:void(0)" id="nextBTN">Next</a></li>`;
    let buttons = "";
    let activeClass = "";
    for (let i = 1; i <= total_page; i++) {
      if (i == 1) {
        activeClass = "active";
      } else {
        activeClass = "";
      }
      buttons += `<li class="page-item dynamic-item ${activeClass}" id="page${i}"><a class="page-link" value="${i}" id="pageGo" href="javascript:void(0)">${i}</a></li>`;
    }
    document.getElementById(
      "pagination"
    ).innerHTML = ` ${prevBtn} ${buttons} ${nextBtn}`;
    document.getElementById("pageGo").addEventListener("click", GoToPage);
  }

  document.getElementById("prevBTN").addEventListener("click", prevBtn);
  document.getElementById("nextBTN").addEventListener("click", nextBtn);
}

async function totalCollection() {
  try {
    let filterDates = "";
    if (searchDate.value.length > 0) {
      filterDates = [searchDate.value];
      document.getElementById("StartDate").value = "";
      document.getElementById("EndDate").value = "";
      // console.log(filterDates);
    } else {
      filterDates = dateArray();
      // console.log(filterDates);
    }
    const getResponse = await fetch(url);
    const getResult = await getResponse.json();
    // const date =  || "";
    let myCollectionTable = document.getElementById("myCollectionTable");
    myCollectionTable.innerHTML = "";
    // console.log(getResult, date);
    let filterCollections = false;
    let collection1 = [];
    let collection2 = [];
    let collection3 = [];
    let collection4 = [];
    let collection5 = [];
    let collection6 = [];
    let collection7 = [];
    let collection8 = [];
    for (let i = 0; i < filterDates.length; i++) {
      const date = filterDates[i];
      const filterCollection = (date) => {
        // console.log(date, getResult);
        if (!date) {
          alert("Please Enter Date");
          // console.log("please Enter Date")
          return;
        } else {
          filterCollections = true;
          if (filterCollections === true) {
            let collection_filter1 = getResult.filter(
              (element) =>
                (collection1 =
                  element.Installment_1ST_Date.toString().toUpperCase() ===
                  date.toString().toUpperCase())
            );
            collection1 = collection_filter1;
            for (let i = 0; i < collection1.length; i++) {
              let myCollectionRow = `<tr>
        <td style="text-align: center;">${collection1[i].SR}</td>
        <td style="text-align: center;">${collection1[i].Name}</td>
        <td style="text-align: center;">${collection1[i].FName}</td>
        <td style="text-align: center;">${collection1[i].Village}</td>
        <td style="text-align: center;">${collection1[i].Class}</td>
        <td style="text-align: center;">${collection1[i].Section}</td>
        <td style="text-align: center;">${collection1[i].Mobile1}</td>
        <td style="text-align: center;">${collection1[i].Installment_1ST}</td>
        <td style="text-align: center;">${collection1[i].Installment_1ST_Date}</td>
  </tr>`;
              myCollectionTable.innerHTML += myCollectionRow;
            }
            // console.log(collection1);
          }
          if (filterCollections === true) {
            let collection_filter2 = getResult.filter(
              (element) =>
                (collection2 =
                  element.Installment_2ND_Date.toString().toUpperCase() ===
                  date.toString().toUpperCase())
            );
            collection2 = collection_filter2;
            for (let i = 0; i < collection2.length; i++) {
              let myCollectionRow = `<tr>
        <td style="text-align: center;">${collection2[i].SR}</td>
        <td style="text-align: center;">${collection2[i].Name}</td>
        <td style="text-align: center;">${collection2[i].FName}</td>
        <td style="text-align: center;">${collection2[i].Village}</td>
        <td style="text-align: center;">${collection2[i].Class}</td>
        <td style="text-align: center;">${collection2[i].Section}</td>
        <td style="text-align: center;">${collection2[i].Mobile1}</td>
        <td style="text-align: center;">${collection2[i].Installment_2ND}</td>
        <td style="text-align: center;">${collection2[i].Installment_2ND_Date}</td>
  </tr>`;
              myCollectionTable.innerHTML += myCollectionRow;
            }
            // console.log(collection2);
          }
          if (filterCollections === true) {
            let collection_filter3 = getResult.filter(
              (element) =>
                (collection3 =
                  element.Installment_3RD_Date.toString().toUpperCase() ===
                  date.toString().toUpperCase())
            );
            collection3 = collection_filter3;
            for (let i = 0; i < collection3.length; i++) {
              let myCollectionRow = `<tr>
        <td style="text-align: center;">${collection3[i].SR}</td>
        <td style="text-align: center;">${collection3[i].Name}</td>
        <td style="text-align: center;">${collection3[i].FName}</td>
        <td style="text-align: center;">${collection3[i].Village}</td>
        <td style="text-align: center;">${collection3[i].Class}</td>
        <td style="text-align: center;">${collection3[i].Section}</td>
        <td style="text-align: center;">${collection3[i].Mobile1}</td>
        <td style="text-align: center;">${collection3[i].Installment_3RD}</td>
        <td style="text-align: center;">${collection3[i].Installment_3RD_Date}</td>
  </tr>`;
              myCollectionTable.innerHTML += myCollectionRow;
            }
            // console.log(collection3);
          }
          if (filterCollections === true) {
            let collection_filter4 = getResult.filter(
              (element) =>
                (collection4 =
                  element.Installment_4TH_Date.toString().toUpperCase() ===
                  date.toString().toUpperCase())
            );
            collection4 = collection_filter4;
            for (let i = 0; i < collection4.length; i++) {
              let myCollectionRow = `<tr>
        <td style="text-align: center;">${collection4[i].SR}</td>
        <td style="text-align: center;">${collection4[i].Name}</td>
        <td style="text-align: center;">${collection4[i].FName}</td>
        <td style="text-align: center;">${collection4[i].Village}</td>
        <td style="text-align: center;">${collection4[i].Class}</td>
        <td style="text-align: center;">${collection4[i].Section}</td>
        <td style="text-align: center;">${collection4[i].Mobile1}</td>
        <td style="text-align: center;">${collection4[i].Installment_4TH}</td>
        <td style="text-align: center;">${collection4[i].Installment_4TH_Date}</td>
  </tr>`;
              myCollectionTable.innerHTML += myCollectionRow;
            }
            // console.log(collection4);
          }
          if (filterCollections === true) {
            let collection_filter5 = getResult.filter(
              (element) =>
                (collection5 =
                  element.Installment_5TH_Date.toString().toUpperCase() ===
                  date.toString().toUpperCase())
            );
            collection5 = collection_filter5;
            for (let i = 0; i < collection5.length; i++) {
              let myCollectionRow = `<tr>
        <td style="text-align: center;">${collection5[i].SR}</td>
        <td style="text-align: center;">${collection5[i].Name}</td>
        <td style="text-align: center;">${collection5[i].FName}</td>
        <td style="text-align: center;">${collection5[i].Village}</td>
        <td style="text-align: center;">${collection5[i].Class}</td>
        <td style="text-align: center;">${collection5[i].Section}</td>
        <td style="text-align: center;">${collection5[i].Mobile1}</td>
        <td style="text-align: center;">${collection5[i].Installment_5TH}</td>
        <td style="text-align: center;">${collection5[i].Installment_5TH_Date}</td>
  </tr>`;
              myCollectionTable.innerHTML += myCollectionRow;
            }
            // console.log(collection5);
          }
          if (filterCollections === true) {
            let collection_filter6 = getResult.filter(
              (element) =>
                (collection6 =
                  element.Installment_6TH_Date.toString().toUpperCase() ===
                  date.toString().toUpperCase())
            );
            collection6 = collection_filter6;
            for (let i = 0; i < collection6.length; i++) {
              let myCollectionRow = `<tr>
        <td style="text-align: center;">${collection6[i].SR}</td>
        <td style="text-align: center;">${collection6[i].Name}</td>
        <td style="text-align: center;">${collection6[i].FName}</td>
        <td style="text-align: center;">${collection6[i].Village}</td>
        <td style="text-align: center;">${collection6[i].Class}</td>
        <td style="text-align: center;">${collection6[i].Section}</td>
        <td style="text-align: center;">${collection6[i].Mobile1}</td>
        <td style="text-align: center;">${collection6[i].Installment_6TH}</td>
        <td style="text-align: center;">${collection6[i].Installment_6TH_Date}</td>
  </tr>`;
              myCollectionTable.innerHTML += myCollectionRow;
            }
            // console.log(collection6);
          }
          if (filterCollections === true) {
            let collection_filter7 = getResult.filter(
              (element) =>
                (collection7 =
                  element.Installment_7TH_Date.toString().toUpperCase() ===
                  date.toString().toUpperCase())
            );
            collection7 = collection_filter7;
            for (let i = 0; i < collection7.length; i++) {
              let myCollectionRow = `<tr>
        <td style="text-align: center;">${collection7[i].SR}</td>
        <td style="text-align: center;">${collection7[i].Name}</td>
        <td style="text-align: center;">${collection7[i].FName}</td>
        <td style="text-align: center;">${collection7[i].Village}</td>
        <td style="text-align: center;">${collection7[i].Class}</td>
        <td style="text-align: center;">${collection7[i].Section}</td>
        <td style="text-align: center;">${collection7[i].Mobile1}</td>
        <td style="text-align: center;">${collection7[i].Installment_7TH}</td>
        <td style="text-align: center;">${collection7[i].Installment_7TH_Date}</td>
  </tr>`;
              myCollectionTable.innerHTML += myCollectionRow;
            }
            // console.log(collection7);
          }
          if (filterCollections === true) {
            let collection_filter8 = getResult.filter(
              (element) =>
                (collection8 =
                  element.Installment_8TH_Date.toString().toUpperCase() ===
                  date.toString().toUpperCase())
            );
            collection8 = collection_filter8;
            for (let i = 0; i < collection8.length; i++) {
              let myCollectionRow = `<tr>
        <td style="text-align: center;">${collection8[i].SR}</td>
        <td style="text-align: center;">${collection8[i].Name}</td>
        <td style="text-align: center;">${collection8[i].FName}</td>
        <td style="text-align: center;">${collection8[i].Village}</td>
        <td style="text-align: center;">${collection8[i].Class}</td>
        <td style="text-align: center;">${collection8[i].Section}</td>
        <td style="text-align: center;">${collection8[i].Mobile1}</td>
        <td style="text-align: center;">${collection8[i].Installment_8TH}</td>
        <td style="text-align: center;">${collection8[i].Installment_8TH_Date}</td>
  </tr>`;
              myCollectionTable.innerHTML += myCollectionRow;
            }
            // console.log(collection8);
          }
          console.log(
            collection1,
            collection2,
            collection3,
            collection4,
            collection5,
            collection6,
            collection7,
            collection8
          );
        }
      };
      filterCollections === true;
      filterCollection(date);
    }
    filterDates = "";
    searchDate.value = "";
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

function tableGet(getStudentData) {
  try {
    // let table = document.getElementById("myTable");
    table.innerHTML = "";
    // for (let i = 0; i < getStudentData.length; i++) {
    let row = `<tr>
        <td style="text-align: center;">${getStudentData.SR}</td>
        <td style="text-align: center;">${getStudentData.Name}</td>
        <td style="text-align: center;">${getStudentData.FName}</td>
        <td style="text-align: center;">${getStudentData.MName}</td>
        <td style="text-align: center;">${getStudentData.Class}</td>
        <td style="text-align: center;">${getStudentData.Section}</td>
        <td style="text-align: center;">${getStudentData.Mobile1}</td>
        <td style="text-align: center;">${getStudentData.Mobile2}</td>
        <td style="text-align: center;">${getStudentData.PenNumber}</td>
        <td style="text-align: center;">${getStudentData.TotalFee}</td>
        <td style="text-align: center;">${getStudentData.BalanceFee}</td>
        <td style="text-align: center;">${getStudentData.Discount}</td>
        <td style="text-align: center;">${getStudentData.PaidAmount}</td>
        <td style="text-align: center;"><button onclick="myStudentData(${getStudentData.SR})">PROFILE</button></td>
        <td style="text-align: center;"><button onclick="myStudentFees(${getStudentData.SR})">FEES</button></td>
        <td style="text-align: center;"><button onclick="myStudentResult(${getStudentData.SR})">Result</button></td>
      </tr>`;
    table.innerHTML += row;
    // }
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

async function studentSearchBySrGet() {
  try {
    filterSR = getSearchBySr.value;
    if (filterSR > 0) {
      // srElAdmissionNumberShow.value = filterSR;
      // console.log(filterSR);
      async function xyz() {
        const getResult = await searchSingleDataBySr();
        if (filterSRValue === true) {
          // console.log(getResult);
          tableGet(getResult);
          Pagination(getResult);
        }
        filterSRValue = false;
        return;
      }
      xyz();
      getSearchBySr.value = "";
      return;
    }
  } catch (error) {
    alert("An Error", error.message);
  }
}

async function studentFeeList() {
  try {
    const getResponse = await fetch(url);
    const getResult = await getResponse.json();
    // console.log(getResult);
    // let table = document.getElementById("myTable");
    table.innerHTML = "";
    const studentDataName = getStudentNameEl.value;
    const studentDataClass = getClassEl.value;
    const studentDataFName = getFatherNameEl.value;
    const studentDataPenNumber = getPenNumberEl.value;

    const filterStudentData = (_Name, _FName, _Class, _PenNumber) => {
      let data_filter = getResult.filter((element) => {
        if (
          _Name.length > 0 &&
          _Class.length > 0 &&
          _FName.length > 0 &&
          _PenNumber.length > 0
        ) {
          return (
            element.Name.toUpperCase() === _Name.toUpperCase(),
            element.FName.toUpperCase() === _FName.toUpperCase(),
            element.Class.toUpperCase() === _Class.toUpperCase(),
            element.PenNumber.toUpperCase() === _PenNumber.toUpperCase()
          );
        }
        if (_Name.length > 0 && _Class.length > 0 && _FName.length > 0) {
          return (
            element.Name.toUpperCase() === _Name.toUpperCase(),
            element.FName.toUpperCase() === _FName.toUpperCase(),
            element.Class.toUpperCase() === _Class.toUpperCase()
          );
        }
        if (_Class.length > 0 && _FName.length > 0 && _PenNumber.length > 0) {
          return (
            element.FName.toUpperCase() === _FName.toUpperCase(),
            element.Class.toUpperCase() === _Class.toUpperCase(),
            element.PenNumber.toUpperCase() === _PenNumber.toUpperCase()
          );
        }
        if (_Name.length > 0 && _FName.length > 0 && _PenNumber.length > 0) {
          return (
            element.Name.toUpperCase() === _Name.toUpperCase(),
            element.FName.toUpperCase() === _FName.toUpperCase(),
            element.PenNumber.toUpperCase() === _PenNumber.toUpperCase()
          );
        }
        if (_Name.length > 0 && _Class.length > 0 && _PenNumber.length > 0) {
          return (
            element.Name.toUpperCase() === _Name.toUpperCase(),
            element.Class.toUpperCase() === _Class.toUpperCase(),
            element.PenNumber.toUpperCase() === _PenNumber.toUpperCase()
          );
        }
        if (_Name.length > 0 && _Class.length > 0) {
          return (
            element.Name.toUpperCase() === _Name.toUpperCase(),
            element.Class.toUpperCase() === _Class.toUpperCase()
          );
        }
        if (_Name.length > 0 && _FName.length > 0) {
          return (
            element.Name.toUpperCase() === _Name.toUpperCase(),
            element.FName.toUpperCase() === _FName.toUpperCase()
          );
        }
        if (_Name.length > 0 && _PenNumber.length > 0) {
          return (
            element.Name.toUpperCase() === _Name.toUpperCase(),
            element.PenNumber.toUpperCase() === _PenNumber.toUpperCase()
          );
        }
        if (_Class.length > 0 && _FName.length > 0) {
          return (
            element.FName.toUpperCase() === _FName.toUpperCase(),
            element.Class.toUpperCase() === _Class.toUpperCase()
          );
        }
        if (_FName.length > 0 && _PenNumber.length > 0) {
          return (
            element.FName.toUpperCase() === _FName.toUpperCase(),
            element.PenNumber.toUpperCase() === _PenNumber.toUpperCase()
          );
        }
        if (_Class.length > 0 && _PenNumber.length > 0) {
          return (
            element.Class.toUpperCase() === _Class.toUpperCase(),
            element.PenNumber.toUpperCase() === _PenNumber.toUpperCase()
          );
        }
        if (_Name.length > 0) {
          return element.Name.toUpperCase() === _Name.toUpperCase();
        }
        if (_Class.length > 0) {
          return element.Class.toUpperCase() === _Class.toUpperCase();
        }
        if (_FName.length > 0) {
          return element.FName.toUpperCase() === _FName.toUpperCase();
        }
        if (_PenNumber.length > 0) {
          return element.PenNumber.toUpperCase() === _PenNumber.toUpperCase();
        }
      });
      // console.log(data_filter);
      Pagination(data_filter);
      // for (let i = 0; i < data_filter.length; i++) {
      //   let row = `<tr>
      //     <td style="text-align: center;">${data_filter[i].SR}</td>
      //     <td style="text-align: center;">${data_filter[i].Name}</td>
      //     <td style="text-align: center;">${data_filter[i].FName}</td>
      //     <td style="text-align: center;">${data_filter[i].MName}</td>
      //     <td style="text-align: center;">${data_filter[i].Class}</td>
      //     <td style="text-align: center;">${data_filter[i].Section}</td>
      //     <td style="text-align: center;">${data_filter[i].Mobile1}</td>
      //     <td style="text-align: center;">${data_filter[i].Mobile2}</td>
      //     <td style="text-align: center;">${data_filter[i].PenNumber}</td>
      //     <td style="text-align: center;">${data_filter[i].TotalFee}</td>
      //     <td style="text-align: center;">${data_filter[i].BalanceFee}</td>
      //     <td style="text-align: center;">${data_filter[i].Discount}</td>
      //     <td style="text-align: center;">${data_filter[i].PaidAmount}</td>
      //     <td style="text-align: center;"><button onclick="myStudentData(${data_filter[i].SR})">PROFILE</button></td>
      //     <td style="text-align: center;"><button onclick="myStudentFees(${data_filter[i].SR})">FEES</button></td>
      //     <td style="text-align: center;"><button onclick="myStudentResult(${data_filter[i].SR})">Result</button></td>
      //   </tr>`;
      //   table.innerHTML += row;
      // }
    };
    if (
      studentDataName.length > 0 ||
      studentDataFName.length > 0 ||
      studentDataClass.length > 0 ||
      studentDataPenNumber.length > 0
    ) {
      filterStudentData(
        studentDataName,
        studentDataFName,
        studentDataClass,
        studentDataPenNumber
      );
    } else {
      Pagination(getResult);
      // for (let i = 0; i < getResult.length; i++) {
      //   let row = `<tr>
      //     <td style="text-align: center;">${getResult[i].SR}</td>
      //     <td style="text-align: center;">${getResult[i].Name}</td>
      //     <td style="text-align: center;">${getResult[i].FName}</td>
      //     <td style="text-align: center;">${getResult[i].MName}</td>
      //     <td style="text-align: center;">${getResult[i].Class}</td>
      //     <td style="text-align: center;">${getResult[i].Section}</td>
      //     <td style="text-align: center;">${getResult[i].Mobile1}</td>
      //     <td style="text-align: center;">${getResult[i].Mobile2}</td>
      //     <td style="text-align: center;">${getResult[i].PenNumber}</td>
      //     <td style="text-align: center;">${getResult[i].TotalFee}</td>
      //     <td style="text-align: center;">${getResult[i].BalanceFee}</td>
      //     <td style="text-align: center;">${getResult[i].Discount}</td>
      //     <td style="text-align: center;">${getResult[i].PaidAmount}</td>
      //     <td style="text-align: center;"><button onclick="myStudentData(${getResult[i].SR})">PROFILE</button></td>
      //     <td style="text-align: center;"><button onclick="myStudentFees(${getResult[i].SR})">FEES</button></td>
      //     <td style="text-align: center;"><button onclick="myStudentResult(${getResult[i].SR})">Result</button></td>
      //   </tr>`;
      //   table.innerHTML += row;
      // }
      return;
    }
  } catch (error) {
    alert("An Error", error.message);
  }
}

function printReport_Card() {
  try {
    let body = document.getElementById("print").innerHTML;
    let reportCard = document.getElementById("printReport_Card").innerHTML;
    document.getElementById("print").innerHTML = reportCard;
    document.getElementById("print_Result").classList.add("printResult");
    window.print();
    document.getElementById("print_Result").classList.remove("printResult");
    document.getElementById("print").innerHTML = body;
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}

function print_Id() {
  try {
    let body = document.getElementById("print").innerHTML;
    let idCard = document.getElementById("print-ID").innerHTML;
    document.getElementById("print").innerHTML = idCard;
    document.getElementById("print_id_margin").classList.remove("box");
    window.print();
    document.getElementById("print_id_margin").classList.add("box");
    document.getElementById("print").innerHTML = body;
    return;
  } catch (error) {
    alert("An Error", error.message);
  }
}
updateDOM();

// Button Events Start
SearchBtn.addEventListener("click", showFeeData);
ViewDataBtn.addEventListener("click", filterData);
viewTcDataBtn.addEventListener("click", ShowTC);
photoViewDataBtn.addEventListener("click", photoFilterData);
GetData.addEventListener("click", studentFeeList);
getViewDataBtn.addEventListener("click", studentSearchBySrGet);
Registration.addEventListener("click", displayRegistration);
FileUploads.addEventListener("click", displayUploads);
FeeSubmit.addEventListener("click", displayFeeSubmit);
TodayCollection.addEventListener("click", displayTodayCollection);
FeeData.addEventListener("click", displayFeeData);
Back.addEventListener("click", backTo);
LogInBtn.addEventListener("click", logIn);
LogOutBtn.addEventListener("click", logOut);
Menubar.addEventListener("click", menuBar);
IdCard.addEventListener("click", displayIdCard);
TC.addEventListener("click", displayTC);
ReportCard.addEventListener("click", displayReportCard);
result_Nto2.addEventListener("click", result_Nto2Show);
result_3to8.addEventListener("click", result_3to8Show);
result_9.addEventListener("click", result_9Show);
result_11.addEventListener("click", result_11Show);
printReport_Card_Btn.addEventListener("click", printReport_Card);
print_ID_Btn.addEventListener("click", print_Id);
Update.addEventListener("click", updateData);
printTCEL.addEventListener("click", printTC);
saveTC.addEventListener("click", saveTcData);
updateStudentData.addEventListener("click", updateStudentRecord);
getViewCollectionBtn.addEventListener("click", totalCollection);
PrintFeeBtn.addEventListener("click", printFees);

// Button Events End
