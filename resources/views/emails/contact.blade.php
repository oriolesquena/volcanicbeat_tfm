<head>
    <meta name="viewport" content="width=device-width">
    <style>
        .main {
            background-color: white;
            color: black;
            font-size: 1rem;
            line-height: 1.5;
            padding: 15px 30px;
        }

        .first-p {
            font-size: 0.9rem;
            margin-bottom: 8px;
        }

        .msg {
            padding: 0px 10px;
        }

        .msg p {
            margin: 8px auto;
        }
        @media screen and (min-width: 768px) {
            .bg-gray {
                background-color: #e6e6e6;
                padding: 20px;
            }

            .main {
                font-size: 1.2rem;
                line-height: 1.5;
                width: 50%;
                height: 90%;
                padding: 30px 50px;
                margin: 30px auto;
            }

            .first-p {
                font-size: 1.1rem;
            }

            .msg {
                padding: 0px 50px;
            }
        }
    </style>
</head>

<body>
    <div class="bg-gray">
        <div class="main">
            <p class="first-p"><em>{{ $data['name'] }}</em> acaba d'enviar un nou formulari de contacte a Volcanic Beat

            <div class="msg">
                <p><strong>Detalls del missatge:</strong></p>
                <p>Nom: {{ $data['name'] }}</p>
                <p>Correu electrònic: {{ $data['email'] }}</p>
                <p>Telèfon mòbil: {{ $data['mobile_phone'] }}</p>
                <p>Assumpte: {{ $data['title'] }}</p>
                <p>Missatge: {{ $data['msg'] }}</p>
            </div>
        </div>
    </div>
</body>

<!--
<body style="background-color: #e6e6e6;
            padding: 20px;">
    <div class="main" style="background-color: white;
        color: black;
        font-size: 1.2rem;
        line-height: 1.5;
        width: 50%;
        min-width: 350px;
        height: 90%;
        padding: 30px 50px;
        margin: 30px auto;
        ">
        <p class="first-p" style="font-size: 1.1rem;"><em>{{ $data['name'] }}</em> acaba d'enviar un nou formulari de contacte a Volcanic Beat

        <div class="msg" style="padding: 0px 50px;">
            <p><strong>Detalls del missatge:</strong></p>
            <p>Nom: {{ $data['name'] }}</p>
            <p>Correu electrònic: {{ $data['email'] }}</p>
            <p>Telèfon mòbil: {{ $data['mobile_phone'] }}</p>
            <p>Assumpte: {{ $data['title'] }}</p>
            <p>Missatge: {{ $data['msg'] }}</p>
        </div>
    </div>
</body>
-->