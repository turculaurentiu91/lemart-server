
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <link rel="stylesheet" href="{{public_path('easypress-res/easypress-pdf.css')}}">
    </head>
    <body>
        <div class="page">
            <table style="width: 100%; transform: translateY(-20px)" >
                <tr class="antet">
                    <td>&nbsp;</td>
                    <td>
                        <i>Proposta {{$request->formatted_id}} Pag <b>1</b> a <b>2</b></i>
                    </td>
                </tr>
            </table>
            <table style="width: 100%;">
                <tr class="header">
                    <td class="header__left-cell">
                        <h1 class="header__title">LEMART <span class="header__title--small">S.r.l.</span></h1>

                        <h3>Email Richiedente: {{$request->email}}</h3>
                        @isset($request->note)
                        <h3>Altri Dati: {!! nl2br($request->note) !!}</h3>
                        @endisset
                    </td>
                    <td class="header__right_cell" align="center">
                        <img src="{{public_path('easypress-res/iso.jpg')}}" width="100"></img>
                        <p class="header__subimg">Proposta n <b>{{$request->formatted_id}}</b> del {{$request->created_at->format('d-m-Y')}}</p>
                    </td>
                </tr>
            </table>

            <p class="ogetto">
                <b>OGGETTO: PROPOSTA DI MANUTENZIONE PROGRAMMATA<b> <span>easypress<span>
            </p>

            <table class="description-table">
                <tr>
                    <th>Cod.</th>
                    <th colspan="2">Descrizione</th>
                </tr>

                <tr>
                    <td>Ctrl01</td>
                    <td colspan="2">Controllo ispettivo dello stato di conservazione del locale Gruppo di pressurizzazione e comunicazione di eventuali provvedimenti da attuare per il corretto ripristino del regolare funzionamento</td>
                </tr>

                <tr>
                    <td>ep+</td>
                    <td colspan="2">
                        <p>Fornitura di kit solo per <span class="easypress-text">easypress+</span> comprensivo di:</p>
                        <ul>
                            <li>Relè GSM stagno (escluso SIM)</li>
                            <li>Pressostato tarabile “superior quality”</li>
                            <li>Schemi elettrici ed idraulici di collegamento</li>
                            <li>Manuale di montaggio</li>
                            <li>Taratura, controllo, prove tecniche e collaudo del sistema</li>
                            <li>Gestione continua allarmi pressione ed elettrici</li>
                            <li>Reperibilità come da specifiche di contratto</li>
                            <li>Riparazione compreso materiali come da specifiche di contratto</li>
                        </ul>
                    </td>
                </tr>

                <tr>
                    <td>ep1903</td>
                    <td colspan="2">
                        <p>Manutenzione ordinaria del sistema di pressurizzazione sanitario composto da:</p>
                        <ul>
                            <li>Controllo stillicidi</li>
                            <li>Controllo rumorosità anomale</li>
                            <li>Controllo e verifica precarica vasi di espansione</li>
                            <li>Controllo assorbimenti elettrici entro i valori di targa</li>
                            <li>Controllo portata e pressione di esercizio</li>
                            <li>Controllo presenza di alimentazione idrica</li>
                            <li>Controllo taratura pressostati o/o taratura parametri Inverter </li>
                            <li>Pulizia generale</li>
                            <li>Controllo stato di inquinamento del/dei serbatoio/i di prima raccolta</li>
                            <li>Controllo del funzionamento dell’interruttore di livello meccanico</li>
                            <li>Comunicazione di necessità di sanificazione serbatoio/i di prima raccolta</li>
                        </ul>
                    </td>
                </tr>

                <tr>
                    <td colspan="3">Tipologia di contratto scelta</td>
                </tr>

                <tr>
                    <td><span class="easypress-text">easypress</span></td>
                    <td>1 Visita di manutenzione annuale</td>
                    <td>&euro;/anno {{$request->formatted_price_one}} + I.V.A</td>
                </tr>

                <tr>
                    <td><span class="easypress-text">easypress</span></td>
                    <td>2 Visite di manutenzione annuali</td>
                    <td>&euro;/anno {{$request->formatted_price_two}} + I.V.A</td>
                </tr>

                <tr>
                    <td><span class="easypress-text">easypress+</span></td>
                    <td>2 Visite di manutenzione annuali</td>
                    <td>&euro;/anno {{$request->formatted_price_plus}} + I.V.A</td>
                </tr>
            </table>

            <div class="footer">
                <img src="{{public_path('easypress-res/footer.jpg')}}" alt="">
            </div>
        </div>

        <div class="page">
            <table style="width: 100%;">
                <tr class="antet">
                    <td>&nbsp;</td>
                    <td>
                        <i>Proposta {{$request->formatted_id}} Pag <b>2</b> a <b>2</b></i>
                    </td>
                </tr>
            </table>

            <table class="cond">
                <tr>
                    <td colspan="2"><b>CONDIZIONI DI FORNITURA PROPOSTA N° {{$request->formatted_id}}</b></td>
                </tr>

                <tr>
                    <td>
                        <p><span class="point">a)</span>FREQUENZA <br>
                        La manutenzione ordinaria degli impianti verrà eseguita con cadenza come indicata nelle descrizioni
                        dei singoli componenti. Durante tali visite verranno condotte tutte le operazioni necessarie al buon mantenimento
                        degli impianti. Al termine di ogni visita verrà rilasciato un Rapporto di Intervento firmato dal Tecnico esecutore ed in
                        copia firmato e timbrato dall'incaricato; se non diversamente indicato, la firma è accettata da chiunque faccia parte
                        dell'Azienda ove è stato eseguito l'intervento.</p>
                        <p><span class="point">b)</span>MATERIALI OCCORRENTI <br>
                        Con easypress+ è compresa la sostituzione dei materiali relativi al Gruppo di pressurizzazione,
                        ad esclusione delle elettropompe, collettore, valvole e quadro elettrico o parte di essi, nel caso che
                        i problemi rilevati non siano originati da fattori non direttamente imputabili al sistema o per manomissione
                        volontaria o involontaria.</p>
                        <p><span class="point">c)</span>TEMPISTICHE <br>
                        Con easypress+  n caso di richiesta di intervento vi verrà fornito il supporto tecnico entro 24 ore lavorative. <br>
                        In caso di richiesta di intervento "urgente", vi verrà fornito il supporto tecnico entro 4 ore lavorative
                        (orari 08.00-12.30 ... 13-30-17.00) o un servizio di Reperibilità degli orari 17,00...24.00 escluso giorni festivi
                        e prefestivi (Eventuale servizio di <b>Reperibilità Full</b> 24/24 7/7 365/365, richiedere offerta specifica)</p>
                        <p><span class="point">d)</span>TARIFFE <br>
                        <b>Intervento STANDARD</b> <br>
                        (Da lunedì a venerdì dalle 8.00 alle 17.00) <br>
                        Tecnico Specializzato €/h 35.00 <br>
                        Viaggio € 50.00 (Firenze e Provincia) <br>
                        Diritto di chiamata € 0,00 <br>
                        <b>Chiamata Urgente</b> <br>
                        (Da lunedì a venerdì dalle 8.00 alle 17.00 - entro 4 ore) <br>
                        Tecnico Specializzato €/h 35.00 <br>
                        Viaggio € 50.00 (Firenze e Provincia) <br>
                        Diritto di chiamata e 80,00 <br>
                        <b>Reperibilità Full (NON COMPRESA)</b> giorni feriali dalle 17.00 alle 08.00 e Festivi e Prefestivi dalle ore 0.00 alle ore 24.00 <br>
                        Intervento entro le 4 ore <br>
                        Tecnico Specializzato €/h 52.00 <br>
                        Viaggio € 50.00 (Firenze e Provincia) <br>
                        Diritto di chiamata € 150,00 <br>
                        <b>Reperibilità "<span class="easypress-text">easypress+</span>" </b><br>
                        Reperibilità giorni feriali dalle 17.00 alle 24.00 <br>
                        Intervento entro le 4 ore <br>
                        Tecnico Specializzato €/h 52.00 <br>
                        Viaggio € 50.00 (Firenze e Provincia) <br>
                        <span style="text-decoration: line-through">Diritto di chiamata € 150,00</span> <br>
                        <span style="text-decoration: underline">Contabilizzazione interventi minimo ore una</span> </p>
                        <p><span class="point">e)</span>DURATA DEL CONTRATTO <br>
                        Il presente contratto ha valenza annuale per easypress o Triennale per easypress+
                        e attivo dalla data indicata al punti i); si considera tacitamente rinnovato
                        salvo disdetta entro 30 giorni dalla scadenza del presente con le modalità previste
                        nel paragrafo "risoluzione del contratto"</p>
                    </td>
                    <td>
                        <p><span class="point">f)</span>RIVALUTAZIONE ISTAT <br>
                        Il canone sarà rivalutato ad ogni rinnovo in base all'aumento I.S.T.A.T.</p>

                        <p><span class="point">g)</span>FATTURAZIONE <br>
                        Il canone sarà fatturato alla stipula del contratto mentre gli interventi saranno
                        contabilizzati e fatturati entro la fine del mese.
                        Il pagamento sarà effettuato con “Rimessa diretta ricevimento fattura.</p>

                        <p><span class="point">h)</span>RISOLUZIONE DEL CONTRATTO <br>
                        Il presente contratto potrà essere sciolto dalle
                        parti in causa dietro rinuncia scritta motivata, con
                        comunicazione a mezzo fax o raccomandata cartacea o digitale, previa liquidazione degli
                        importi a noi spettanti per le operazioni svolte e con scadenza non prima
                        di quella Naturale annuale del contratto. </p>

                        <p><span class="point">i)</span>DATA INIZIO</p>

                        <div class="data">Data Stipula</div>

                        <p><span class="point">j)</span>DATA RINNOVO AUTOMATICO </p>

                        <div class="data">Data Rinnovo</div>



                        <p><span class="point">k)</span>TIMBRO E FIRMA PER ACCETTAZIONE</p>

                        <div class="data">Timbro e Firma</div>



                        <p><span class="point">l)</span>ACCETTAZIONE <br>
                        Dichiaro di aver letto ed accettato i punti “a,b,c,d,e,f,g,h,i,j,k e l”</p>
                        <div class="data">Timbro e Firma</div>

                        <div>
                            <span class="easypress-text">easypress</span> <br>
                            <span>by LEMART</span>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td colspan="2">
                        <p>DATI DI FATTURAZIONE: <span> Inserire dati anagrafici e fiscali completi per la fatturazione</span></p>
                        <div class="input">&nbsp;</div>
                        <div class="input">&nbsp;</div>
                    </td>
                </tr>
            </table>

            <div class="signature">
                <img src="{{public_path('easypress-res/signature.jpg')}}" alt="">
            </div>

            <div class="footer">
                <img src="{{public_path('easypress-res/footer.jpg')}}" alt="">
            </div>
        </div>
    </body>
</html>
