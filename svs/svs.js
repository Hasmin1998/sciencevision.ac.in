'use strict';

const Admission = document.querySelector('.Admission');
const overlayAdm = document.querySelector('.overlayAdm');
const btnCloseAdmission = document.querySelector('.close-Admission');
const btnsOpenAdmission = document.querySelectorAll('.show-Admission');

const OpenAdmission = function () {
  Admission.classList.remove('hidden');
  overlayAdm.classList.remove('hidden');
};

const closeAdmission = function () {
  Admission.classList.add('hidden');
  overlayAdm.classList.add('hidden');
};

for (let i = 0; i < btnsOpenAdmission.length; i++)
  btnsOpenAdmission[i].addEventListener('click', OpenAdmission);

btnCloseAdmission.addEventListener('click', closeAdmission);
overlayAdm.addEventListener('click', closeAdmission);

document.addEventListener('keydown', function (e) {

  if (e.key === 'Escape' && !Admission.classList.contains('hidden')) {
    closeAdmission();
  }
});


const Notifications = document.querySelector('.Notifications');
const overlayNot = document.querySelector('.overlayNot');
const btnCloseNotifications = document.querySelector('.close-Notifications');
const btnsOpenNotifications = document.querySelectorAll('.show-Notifications');
const OpenNotifications = function () {
  Notifications.classList.remove('hidden');
  overlayNot.classList.remove('hidden');
};
const closeNotifications = function () {
  Notifications.classList.add('hidden');
  overlayNot.classList.add('hidden');
};
for (let i = 0; i < btnsOpenNotifications.length; i++)
  btnsOpenNotifications[i].addEventListener('click', OpenNotifications);

btnCloseNotifications.addEventListener('click', closeNotifications);
overlayNot.addEventListener('click', closeNotifications);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !Notifications.classList.contains('hidden')) {
    closeNotifications();
  }
});


const Faculty = document.querySelector('.Faculty');
const overlayFac = document.querySelector('.overlayFac');
const btnCloseFaculty = document.querySelector('.close-Faculty');
const btnsOpenFaculty = document.querySelectorAll('.show-Faculty');
const OpenFaculty = function () {
  Faculty.classList.remove('hidden');
  overlayFac.classList.remove('hidden');
};
const closeFaculty = function () {
  Faculty.classList.add('hidden');
  overlayFac.classList.add('hidden');
};
const ScrolledFaculty = function () {
  document.documentElement.scrollHeight;
}
for (let i = 0; i < btnsOpenFaculty.length; i++)
  btnsOpenFaculty[i].addEventListener('click', OpenFaculty);

btnCloseFaculty.addEventListener('click', closeFaculty);
overlayFac.addEventListener('click', closeFaculty);
window.addEventListener('scroll', ScrolledFaculty);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !Faculty.classList.contains('hidden')) {
    closeFaculty();
  }
});




const Courses = document.querySelector('.Courses');
const overlayCou = document.querySelector('.overlayCou');
const btnCloseCourses = document.querySelector('.close-Courses');
const btnsOpenCourses = document.querySelectorAll('.show-Courses');

const OpenCourses = function () {
  Courses.classList.remove('hidden');
  overlayCou.classList.remove('hidden');
};
const closeCourses = function () {
  Courses.classList.add('hidden');
  overlayCou.classList.add('hidden');
};
for (let i = 0; i < btnsOpenCourses.length; i++)
  btnsOpenCourses[i].addEventListener('click', OpenCourses);

btnCloseCourses.addEventListener('click', closeCourses);
overlayCou.addEventListener('click', closeCourses);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !Courses.classList.contains('hidden')) {
    closeCourses();
  }
});






const Contact = document.querySelector('.Contact');
const overlayCon = document.querySelector('.overlayCon');
const btnCloseContact = document.querySelector('.close-Contact');
const btnsOpenContact = document.querySelectorAll('.show-Contact');

const OpenContact = function () {
  Contact.classList.remove('hidden');
  overlayCon.classList.remove('hidden');
};
const closeContact = function () {
  Contact.classList.add('hidden');
  overlayCon.classList.add('hidden');
};
for (let i = 0; i < btnsOpenContact.length; i++)
  btnsOpenContact[i].addEventListener('click', OpenContact);

btnCloseContact.addEventListener('click', closeContact);
overlayCon.addEventListener('click', closeContact);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !Contact.classList.contains('hidden')) {
    closeContact();
  }
});




const Hostel = document.querySelector('.Hostel');
const overlayHos = document.querySelector('.overlayHos');
const btnCloseHostel = document.querySelector('.close-Hostel');
const btnsOpenHostel = document.querySelectorAll('.show-Hostel');

const OpenHostel = function () {
  Hostel.classList.remove('hidden');
  overlayHos.classList.remove('hidden');
};
const closeHostel = function () {
  Hostel.classList.add('hidden');
  overlayHos.classList.add('hidden');
};
for (let i = 0; i < btnsOpenHostel.length; i++)
  btnsOpenHostel[i].addEventListener('click', OpenHostel);

btnCloseHostel.addEventListener('click', closeHostel);
overlayHos.addEventListener('click', closeHostel);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !Hostel.classList.contains('hidden')) {
    closeHostel();
  }
});


const More = document.querySelector('.More');
const overlayMor = document.querySelector('.overlayMor');
const btnCloseMore = document.querySelector('.close-More');
const btnsOpenMore = document.querySelectorAll('.show-More');

const OpenMore = function () {
  More.classList.remove('hidden');
  overlayMor.classList.remove('hidden');
};
const closeMore = function () {
  More.classList.add('hidden');
  overlayMor.classList.add('hidden');
};
for (let i = 0; i < btnsOpenMore.length; i++)
  btnsOpenMore[i].addEventListener('click', OpenMore);

btnCloseMore.addEventListener('click', closeMore);
overlayMor.addEventListener('click', closeMore);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !More.classList.contains('hidden')) {
    closeMore();
  }
});


const Office = document.querySelector('.Office');
const overlayOff = document.querySelector('.overlayOff');
const btnCloseOffice = document.querySelector('.close-Office');
const btnsOpenOffice = document.querySelectorAll('.show-Office');

const OpenOffice = function () {
  Office.classList.remove('hidden');
  overlayOff.classList.remove('hidden');
};

const closeOffice = function () {
  Office.classList.add('hidden');
  overlayOff.classList.add('hidden');
};

for (let i = 0; i < btnsOpenOffice.length; i++)
  btnsOpenOffice[i].addEventListener('click', OpenOffice);

btnCloseOffice.addEventListener('click', closeOffice);
overlayOff.addEventListener('click', closeOffice);

document.addEventListener('keydown', function (e) {

  if (e.key === 'Escape' && !Office.classList.contains('hidden')) {
    closeOffice();
  }
});


const Student = document.querySelector('.Student');
const overlayStu = document.querySelector('.overlayStu');
const btnCloseStudent = document.querySelector('.close-Student');
const btnsOpenStudent = document.querySelectorAll('.show-Student');

const OpenStudent = function () {
  Student.classList.remove('hidden');
  overlayStu.classList.remove('hidden');
};

const closeStudent = function () {
  Student.classList.add('hidden');
  overlayStu.classList.add('hidden');
};

for (let i = 0; i < btnsOpenStudent.length; i++)
  btnsOpenStudent[i].addEventListener('click', OpenStudent);

btnCloseStudent.addEventListener('click', closeStudent);
overlayStu.addEventListener('click', closeStudent);

document.addEventListener('keydown', function (e) {

  if (e.key === 'Escape' && !Student.classList.contains('hidden')) {
    closeStudent();
  }
});


const ArrowIn = document.querySelector('.ArrowIn');
const overlayArI = document.querySelector('.overlayArI');
const btnCloseArrowIn = document.querySelector('.close-ArrowIn');
const btnsOpenArrowIn = document.querySelectorAll('.show-ArrowIn');

const OpenArrowIn = function () {
  ArrowIn.classList.remove('hidden');
  overlayArI.classList.remove('hidden');
};

const closeArrowIn = function () {
  ArrowIn.classList.add('hidden');
  overlayArI.classList.add('hidden');
};

for (let i = 0; i < btnsOpenArrowIn.length; i++)
  btnsOpenArrowIn[i].addEventListener('click', OpenArrowIn);

btnCloseArrowIn.addEventListener('click', closeArrowIn);
overlayArI.addEventListener('click', closeArrowIn);

document.addEventListener('keydown', function (e) {

  if (e.key === 'Escape' && !ArrowIn.classList.contains('hidden')) {
    closeArrowIn();
  }
});
