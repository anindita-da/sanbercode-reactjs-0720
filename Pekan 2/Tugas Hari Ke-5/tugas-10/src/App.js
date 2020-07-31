import React from 'react';
import './App.css';

function App() {
  return (
    <div className="box">
      <h1>Form Pembelian Buah</h1>

<form class="form1" action="">
           
    <div class="input">
        <label class="label" for="nama">Nama Pelanggan</label>
        <input type="text" id="nama"/>
    </div>

    <div class="input">
        <label class="label">Daftar Item</label>
        <div>
            <p><input type='checkbox' name='buah1' value='semangka' />Semangka</p>
            <p><input type='checkbox' name='buah2' value='jeruk' />Jeruk</p>
            <p><input type='checkbox' name='buah3' value='nanas' />Nanas</p>
            <p><input type='checkbox' name='buah4' value='salak' />Salak</p>
            <p><input type='checkbox' name='buah5' value='anggur' />Anggur</p>
        </div>
        
    </div>

    <input type="button" class="button" value="Kirim"/>
    </form>
    </div>
  );
}

export default App;
