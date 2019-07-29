const easypressCalc = {
    host: 'https://app.lemart.it',
    handleEmailInput: function(event) {
        const btn = document.querySelector("#easypress-calc-submit");
       if (event.target.checkValidity()) {
           btn.removeAttribute('disabled');
       } else {
            btn.setAttribute('disabled', 'true');
       }
    },

    toggleErrorModal: function() {
        const modal = document.querySelector('.easypress-modal');
        modal.style.display = modal.style.display === 'flex'
            ? 'none' : 'flex';
    },

    handlePriceFetched: function(priceArray) {
        easypressCalc.togglePricesSpinner();
        document.querySelector('#easypress-price-one')
            .innerHTML = priceArray[0];

        document.querySelector('#easypress-price-two')
            .innerHTML = priceArray[1];

        document.querySelector('#easypress-price-plus')
            .innerHTML = priceArray[2];
    },

    handleAppCountBlur: function(event) {
        if (!event.target.checkValidity()) {
            return;
        }

        easypressCalc.togglePricesSpinner();
        const appCount = event.target.value;
        fetch(
            easypressCalc.host
            + '/api/easypress/price?'
            + 'appartment_count='
            + appCount,
            {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(response => response.json())
        .then(easypressCalc.handlePriceFetched)
        .catch(e => {
            easypressCalc.togglePricesSpinner();
            easypressCalc.toggleErrorModal();
            console.error(e);
        });
    },

    togglePricesSpinner: function() {
        const overlay = document.querySelector(
            '#easypress-prices .easypress-prices-overlay'
        );

        overlay.style.display = overlay.style.display === 'flex' ?
            'none' : 'flex';
    },

    handleDocumentReady: function() {
        document.querySelector('#easypress-calc-email')
            .addEventListener('input', easypressCalc.handleEmailInput);

        document.querySelector('#easypress-form')
            .addEventListener('submit', easypressCalc.handleFormSubmit);

        document.querySelector('#easypress-calc-app-count')
            .addEventListener('blur', easypressCalc.handleAppCountBlur);

        document.querySelector('.easypress-modal-cross-btn')
            .addEventListener('click', easypressCalc.toggleErrorModal);

        document.querySelector('.easypress-modal-close-btn')
            .addEventListener('click', easypressCalc.toggleErrorModal);
    },

    handleFormSubmit: function(event) {
        event.preventDefault();

        const submitBtn = document.querySelector('#easypress-calc-submit');
        submitBtn.setAttribute('disabled', 'true');
        submitBtn.innerHTML = "Ottenendo il Preventivo...";

        const email = document.querySelector('#easypress-calc-email').value;
        const appartament_count =
            document
            .querySelector('#easypress-calc-app-count')
            .value;
        const note = document.querySelector('#easypress-calc-note').value;

        const body = {
            email,
            appartament_count,
            note,
        }

        fetch(
            easypressCalc.host
            + '/api/easypress',
            {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'appication/json'
                }
            }
        )
        .then(response => response.json())
        .then(response => {
            console.log(response);

            document.querySelector('#easypress-download')
                .addEventListener('click', function(e) {
                    e.preventDefault();
                    download(
                        `data:application/pdf;base64,${response.base64_pdf_document}`,
                        'preventivo.pdf',
                        'application/pdf'
                    );
                })

            document.querySelector('#easypress-main-section')
                .style.maxHeight = '0';

            document.querySelector('#easypress-result')
                .classList.add('easypress-result-shown');
        })
        .catch(e => {
            console.error(e);
            easypressCalc.toggleErrorModal();
        });
    },
}

document.addEventListener(
    "DOMContentLoaded",
    easypressCalc.handleDocumentReady
);
