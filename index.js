document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const table = document.getElementById('table');
    const alert = document.getElementById('alert');
    const btn = document.getElementById('add');
    let id=1;

    function removeTodo(id){
        console.log(id);
        document.getElementById(id).remove();
    }

    function addTodo() {
        if (title.value === '' || description.value === '') {
            // console.error('Title and description are required');
            alert.classList.remove('d-none');
            alert.innerText = 'Title and description are required';
            return;
        }
        // } else {
        //     console.log('Ok');
        // }
        // return undefined;
        alert.classList.add('d-none');
        const row = table.insertRow();
        row.setAttribute('id',id++);
        row.innerHTML = `
            <td>${title.value}</td>
            <td>${description.value}</td>
            <td class="text-center">
                <input type="checkbox">
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                <i class="fa fa-pencil"></i>
                </button>
          </td>
        `;

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        console.log(row.children[3]);
        // removeBtn.onclick = function () {
        //     console.log('Borrando fila');
        // }
        removeBtn.onclick = function (e) {
            // console.log(e);
            // console.log(e.target);
            // console.log(e.target.parentNode);
            removeTodo(row.getAttribute('id'));
        }

        row.children[3].appendChild(removeBtn);
    }
    // btn.onclick = function () {
    //     console.log('Title: ', title.value);
    //     console.log('Description: ', description.value);
    // }
    btn.onclick = addTodo;


});

// const btn = document.getElementById('add');
// btn.addEventListener('click',function(){
//     console.log('click');
// })