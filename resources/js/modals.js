
// var Modal = $.fn.modal;
// let modalsElement = document.getElementById('laravel-livewire-modals');

if ($.fn.modal == undefined) {
    console.error("Chưa có thư viện Modal.js hoặc bootstrap chưa hỗ trợ");
}

// modalsElement.addEventListener('hidden.bs.modal', () => {
//     Livewire.emit('resetModal');
// });

$('#laravel-livewire-modals').on('hidden.bs.modal', function (e) {
    Livewire.emit('resetModal');
});

Livewire.on('showBootstrapModal', () => {
    // let modal = $.fn.modal.getInstance(modalsElement);
    // if (!modal) {
    //     modal = new Modal(modalsElement);
    // }
    // modal.show();
    $('#laravel-livewire-modals').modal('show');
});

Livewire.on('hideModal', () => {
    // let modal = Modal.getInstance(modalsElement);
    // modal.hide();
    $('#laravel-livewire-modals').modal('hide');
});
