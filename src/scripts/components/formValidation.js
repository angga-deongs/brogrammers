/* -------------------------------------------------------------------------- */
/* formvalidation                                                             */
/* -------------------------------------------------------------------------- */

var WHITESPACE = /^ *$/,
EMAILREG = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
ALLNUMBER = /^[0-9]+$/;
$formValidation = {
  handleValidationEvent: function() {
    var validationData = {
      vElements: [
        {
          id: 'nama',
          validation: {
            required: true
          }
        },
        {
          id: 'email',
          validation: {
            required: true,
            email: true
          }
        },
        {
          id: 'kota',
          validation: {
            required: true
          }
        },
        {
          id: 'password',
          validation: {
            required: true,
            minimum: true,
            minimumChar: 2
          }
        },
        {
          id: 'telepon',
          validation: {
            required: true,
            phone: true
          }
        },
        {
          id: 'desa',
          validation: {
            required: true
          }
        },
      ],
      vEvents: ['oninput', 'onblur']
    }
    validationData.vEvents.forEach(function(ve, ie){
      validationData.vElements.forEach(function(v, i){
        document.getElementById(v.id)[ve] = function() {
          var _val = this.value,
          _target = this.getAttribute('data-target'),
          _alertElement = document.getElementById(_target),
          _errorMessage;
          _alertElement.classList.remove('is-error');
          _alertElement.classList.add('d-none');
          // Validasi email
          if (v.validation.email) {
            // Jika bukan email
            if (!EMAILREG.test(_val)) {
              _errorMessage = _alertElement.getAttribute('data-invalid-email');
            }
          }
          // Validasi phone
          if (v.validation.phone) {
            // Jika bukan nomor telepon
            if (!ALLNUMBER.test(_val)) {
              _errorMessage = _alertElement.getAttribute('data-invalid-phone');
            }
          }
          // Validasi min
          if (v.validation.minimum) {
            // Jika kurang dari
            if (_val.length < v.validation.minimumChar) {
              _errorMessage = _alertElement.getAttribute('data-min');
            }
          }
          // Validasi kosong
          if (v.validation.required) {
            // Jika kosong / spasi
            if (WHITESPACE.test(_val)) {
              _errorMessage = _alertElement.getAttribute('data-req');
            }
          }
          if (_errorMessage !== undefined) {
            _alertElement.innerText = _errorMessage;
            _alertElement.classList.remove('d-none');
            _alertElement.classList.add('is-error');
          }
        }
      });
    });
    document.getElementById('submit').onclick = function(e) {
      validationData.vElements.forEach(function(v, i){
        document.getElementById(v.id).onblur();
      });
      if (document.getElementsByClassName('is-error').length > 0) {
        e.preventDefault();
      }
    }
    var i,
    lengthNUmber = document.getElementsByClassName('number-only').length;
    for (i = 0; i < lengthNUmber; i++) {
      document.getElementsByClassName('number-only')[i].onkeypress = function(e) {
        if (!ALLNUMBER.test(e.key)) {
          e.preventDefault();
        }
      }
    }
  },
  init: function(){
    $formValidation.handleValidationEvent();
  }
};