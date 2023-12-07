<div style="background-color: #3c4c41;
    color: white;
    font-size: 1.25rem;
    width: 50%;
    height: 90%;
    padding: 30px;
    margin: auto;">
    <p>{{ $data['name'] }} acaba d'enviar un nou formulari de contacte a Volcanic Beat

    <ul style="list-style-type: none;"><strong>Detalls del missatge:</strong></ul>
    <li>Nom: {{ $data['name'] }}</li>
    <li style="color: white;">Correu electrònic: {{ $data['email'] }}</li>
    <li>Telèfon mòbil: {{ $data['mobile_phone'] }}</li>
    <li>Assumpte: {{ $data['title'] }}</li>
    <li>Missatge: {{ $data['msg'] }}</li>
</div>