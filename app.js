// jQuery
$(document).ready(function () {
  const statusElems = $('.status');
  const inputSection = $('.input-section');
  const confirmSection = $('.confirm-section');
  const submitSection = $('.submit-section');
  const submitInputBtn = $('#submit-input');
  const editInputBtn = $('#edit-input');
  const confirmInputBtn = $('#confirm-input');
  const confirmNameElem = $('#confirm-name');
  const confirmEmailElem = $('#confirm-email');

  let currentStatus = 0;

  function switchStatus(index) {
    statusElems.eq(currentStatus).removeClass('active');
    statusElems.eq(index).addClass('active');
    currentStatus = index;

    if (index === 0) {
      inputSection.show();
      confirmSection.hide();
      submitSection.hide();
    } else if (index === 1) {
      inputSection.hide();
      confirmSection.show();
      submitSection.hide();
      confirmNameElem.text($('#name').val());
      confirmEmailElem.text($('#email').val());
    } else if (index === 2) {
      inputSection.hide();
      confirmSection.hide();
      submitSection.show();
    }
  }

  submitInputBtn.click(function () {
    switchStatus(1);
  });

  editInputBtn.click(function () {
    switchStatus(0);
  });

  confirmInputBtn.click(function () {
    switchStatus(2);
  });
});
