        var socket = io();

        socket.on('connect', function() {
            console.log('Conectado al servidor');
        });

        // on = Escuchar informacion del servidor
        socket.on('disconnect', function() {
            console.log('Se perdió conexión con el servidor...');

        });

        // emit = Enviar informacion al servidor
        socket.emit('enviarMensaje', {
            usuario: 'Juan Ignacio',
            menaje: 'Hola mundo'
        }, function(resp) {
            console.log('Respuestar Servidor: ', resp);

        });

        // Escuchar informacion del servidor

        socket.on('enviarMensaje', function(mensaje) {
            console.log('Servidor: ', mensaje);

        })