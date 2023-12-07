<div style="background-color: #e6e6e6;
            padding: 20px;">
    <div style="background-color: white;
        color: black;
        font-size: 1.2rem;
        line-height: 1.5;
        width: 50%;
        min-width: 350px;
        height: 90%;
        padding: 30px 50px;
        margin: 30px auto;
        ">
        <p style="font-size: 1.1rem;"><em>{{ $data['name'] }}</em> acaba d'enviar un nou formulari de contacte a Volcanic Beat

        <div style="padding: 0px 50px;">
            <p><strong>Detalls del missatge:</strong></p>
            <p>Nom: {{ $data['name'] }}</p>
            <p>Correu electrònic: {{ $data['email'] }}</p>
            <p>Telèfon mòbil: {{ $data['mobile_phone'] }}</p>
            <p>Assumpte: {{ $data['title'] }}</p>
            <p>Missatge: {{ $data['msg'] }}</p>
        </div>
    </div>
</div>