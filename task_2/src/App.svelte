<script>
  import { onMount } from 'svelte';
  let amount1 = 1;
  let amount2 = 1;
  let currency1 = 'USD';
  let currency2 = 'EUR';
  let   rate = 1;

  async function fetchRate() {
    const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency1}`);
    const data = await res.json();
    rate = data.rates[currency2];
    amount2 = amount1 * rate;
  }

  onMount(fetchRate);

  function recalculateFromAmount1() {
    amount2 = amount1 * rate;
  }

  function recalculateFromAmount2() {
    amount1 = amount2 / rate;
  }
</script>

<div>
  <input type="number" bind:value={amount1} on:input={recalculateFromAmount1}>
  <select bind:value={currency1} on:change={fetchRate}>
    <option value="USD">USD</option>
    <option value="EUR">EUR</option>
    <option value="GBP">GBP</option>
    <option value="JPY">JPY</option>
    <option value="AUD">AUD</option>
    <option value="CAD">CAD</option>
  </select>
  to
  <input type="number" bind:value={amount2} on:input={recalculateFromAmount2}>
  <select bind:value={currency2} on:change={fetchRate}>
    <option value="USD">USD</option>
    <option value="EUR">EUR</option>
    <option value="GBP">GBP</option>
    <option value="JPY">JPY</option>
    <option value="AUD">AUD</option>
    <option value="CAD">CAD</option>
  </select>
</div>

<style>
  div {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  input, select {
    width: 100%;
    padding: 8px;
    margin-top: 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  input[type="number"] {
    font-size: 16px;
  }
  select {
    background-color: white;
  }
</style>