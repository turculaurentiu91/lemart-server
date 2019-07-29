<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="{{asset('easypress-res/easypress-calc.css')}}" type="text/css">
        <script type="text/javascript" src="{{asset('easypress-res/easypress-calc.js')}}"></script>
        <title>Easypress Calc</title>
    </head>
    <body>
        <div class="easypress-app-container">
            <div class="easypress-app">
                <h2 class="easypress-title">
                    Calcocaltore di preventivi <span>Easypress</span>
                </h2>
                <div id="easypress-main-section">
                    <form id="easypress-form">
                        <div class="easypress-form-group">
                            <label for="easypress-calc-app-count">Numero di Appartamenti</label>
                            <input
                                type="number"
                                id="easypress-calc-app-count"
                                min="1"
                                required
                            >
                            <p><i>* questo campo e richiesto</i></p>
                            <p><i>* questo campo deve essere un numero piu grande di 0</i></p>
                        </div>

                        <div class="easypress-form-group">
                            <label for="easypress-calc-email">Indirizzo E-mail</label>
                            <input
                                type="email"
                                name="email"
                                id="easypress-calc-email"
                                required
                            >
                            <p><i>* questo campo e richiesto</i></p>
                        </div>

                        <div class="easypress-form-group">
                            <label for="easypress-calc-note">Note:</label>
                            <textarea id="easypress-calc-note"></textarea>
                            <p><i>* questo campo puo contenere note aggiungivi, indirizzi e ricapiti</i></p>
                        </div class="easypress-form-group">

                        <div class="easypress-form-group">
                            <button disabled id="easypress-calc-submit">Mandami Preventivo</button>
                        </div>
                    </form>
                </div>
                <div id="easypress-secondary-section">
                    <div class="easypress-prices" id="easypress-prices">
                        <table class="easypress-prices-table">
                            <thead>
                                <tr>
                                    <th>Easypress 1</th>
                                    <th>Easypress 2</th>
                                    <th>Easypress +</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr id="easypress-price-row">
                                    <td id="easypress-price-one">0</td>
                                    <td id="easypress-price-two">0</td>
                                    <td id="easypress-price-plus">0</td>
                                </tr>
                            </tbody>
                        </table>
                        <p><i>* Prezzo stimato in &euro; / Anno </i></p>
                        <div class="easypress-prices-overlay">
                            <div class="loader"></div>
                        </div>
                    </div>

                    <div id="easypress-result" class="easypress-result">
                        <p>Hai appena ricevuto nella tua casella di posta la proposta che stavi cercando.</p>
                        <p>Poi anche scaricarlo qui:</p>
                        <a id="easypress-download" href="#">Scarica Preventivo PDF</a>
                    </div>
                </div>

                <div class="easypress-modal">
                    <div class="easypress-modal-content">
                        <button class="easypress-modal-cross-btn">&times;</button>

                        <h3>Errore</h3>
                        <p>
                            Si è verificato un errore, riprova più tardi.
                            Se l'errore persiste, inviaci un'e-mail.
                            Grazie e scusate per il disagio!
                        </p>

                        <button class="easypress-modal-close-btn">Chiudi</button>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
