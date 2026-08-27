/* ===================== COLUMN DEFINITIONS (from source file) ===================== */
/* party: 'siamtin' | 'amcor'   type: 'text' | 'number' | 'date' | 'week' */

const SHIPPING_LINES = ['Maersk','MSC','OOCL','COSCO','Evergreen'];

const SHEBA_COLUMNS = [
  {key:'poNo', label:"PO no. (PO date)", party:'siamtin', section:'PO Info', type:'text', ph:'2069/1047 (11/03/2026)'},
  {key:'etdWeek', label:"ETD Required week", party:'siamtin', section:'PO Info', type:'week'},
  {key:'poQty', label:"PO Quantity", party:'siamtin', section:'PO Info', type:'number'},
  {key:'shipment', label:"Shipment", party:'siamtin', section:'PO Info', type:'text', ph:'927th'},

  {key:'bookingNo', label:"Booking no.", party:'amcor', section:'Booking & Loading', type:'text'},
  {key:'bookingDate', label:"Booking date", party:'amcor', section:'Booking & Loading', type:'date'},
  {key:'containerNo', label:"Container no.", party:'amcor', section:'Booking & Loading', type:'text'},
  {key:'actualQty', label:"Actual Q'ty Loaded", party:'amcor', section:'Booking & Loading', type:'number'},
  {key:'loadingDate', label:"Loading date", party:'amcor', section:'Booking & Loading', type:'date'},
  {key:'loadingWeek', label:"Loading Week", party:'amcor', section:'Booking & Loading', type:'week'},

  {key:'transitPort', label:"Transition Port", party:'amcor', section:'Transit / Original Plan', type:'text'},
  {key:'origVesselName', label:"Original Vessel name", party:'amcor', section:'Transit / Original Plan', type:'text'},
  {key:'origEtdRotterdam', label:"Original ETD Rotterdam Port", party:'amcor', section:'Transit / Original Plan', type:'date'},

  {key:'origEtaSongkhla', label:"Original ETA Songkhla", party:'amcor', section:'ETA Songkhla (plan)', type:'date'},
  {key:'revIEtaSongkhla', label:"Rev.I ETA Songkhla", party:'amcor', section:'ETA Songkhla (plan)', type:'date'},
  {key:'revIIEtaSongkhla', label:"Rev.II ETA Songkhla", party:'amcor', section:'ETA Songkhla (plan)', type:'date'},

  {key:'actualVessel1', label:"Actual Vessel name", party:'siamtin', section:'Rotterdam → Port Klang', type:'text'},
  {key:'atdRotterdam', label:"ATD Rotterdam Port", party:'siamtin', section:'Rotterdam → Port Klang', type:'date'},
  {key:'atdWeek', label:"ATD week", party:'siamtin', section:'Rotterdam → Port Klang', type:'week'},
  {key:'etaPortKlang', label:"ETA Port Klang", party:'siamtin', section:'Rotterdam → Port Klang', type:'date'},
  {key:'ataPortKlang', label:"ATA Port Klang", party:'siamtin', section:'Rotterdam → Port Klang', type:'date'},
  {key:'etdPortKlang', label:"ETD Port Klang", party:'siamtin', section:'Rotterdam → Port Klang', type:'date'},
  {key:'actualVessel2', label:"Actual Vessel name", party:'siamtin', section:'Rotterdam → Port Klang', type:'text'},
  {key:'atdPortKlang', label:"ATD Port Klang", party:'siamtin', section:'Rotterdam → Port Klang', type:'date'},

  {key:'etaSingapore', label:"ETA Singapore", party:'siamtin', section:'Port Klang → Singapore', type:'date'},
  {key:'ataSingapore', label:"ATA Singapore", party:'siamtin', section:'Port Klang → Singapore', type:'date'},
  {key:'planVesselName', label:"Plan Vessel name", party:'siamtin', section:'Port Klang → Singapore', type:'text'},
  {key:'etdSingapore', label:"ETD Singapore", party:'siamtin', section:'Port Klang → Singapore', type:'date'},
  {key:'actualVessel3', label:"Actual Vessel name", party:'siamtin', section:'Port Klang → Singapore', type:'text'},
  {key:'atdSingapore', label:"ATD Singapore", party:'siamtin', section:'Port Klang → Singapore', type:'date'},

  {key:'etaTanjungPelepas', label:"ETA Tanjung Pelepas", party:'siamtin', section:'Singapore → Tanjung Pelepas', type:'date'},
  {key:'ataTanjungPelepas', label:"ATA Tanjung Pelepas", party:'siamtin', section:'Singapore → Tanjung Pelepas', type:'date'},
  {key:'etdTanjungPelepas', label:"ETD Tanjung Pelepas", party:'siamtin', section:'Singapore → Tanjung Pelepas', type:'date'},
  {key:'actualVessel4', label:"Actual Vessel name", party:'siamtin', section:'Singapore → Tanjung Pelepas', type:'text'},
  {key:'atdTanjungPelepas', label:"ATD Tanjung Pelepas", party:'siamtin', section:'Singapore → Tanjung Pelepas', type:'date'},

  {key:'etaSongkhla', label:"ETA Songkhla", party:'siamtin', section:'Tanjung Pelepas → Songkhla', type:'date'},
  {key:'ataSongkhla', label:"ATA Songkhla", party:'siamtin', section:'Tanjung Pelepas → Songkhla', type:'date'},
  {key:'ataWeek', label:"ATA Week", party:'siamtin', section:'Tanjung Pelepas → Songkhla', type:'week'},
  {key:'leadTimeWeeks', label:"Lead Time (week)", party:'siamtin', section:'Tanjung Pelepas → Songkhla', type:'leadtime'},
  {key:'notes', label:"Notes", party:'siamtin', section:'Tanjung Pelepas → Songkhla', type:'text'},
];

const DINE_COLUMNS = [
  {key:'poNo', label:"PO no. (PO date)", party:'siamtin', section:'PO Info', type:'text', ph:'2069/2997 (9/7/2026)'},
  {key:'etdWeek', label:"ETD Required week", party:'siamtin', section:'PO Info', type:'week'},
  {key:'poQty', label:"PO Quantity", party:'siamtin', section:'PO Info', type:'number'},

  {key:'shipment', label:"Shipment", party:'amcor', section:'Booking & Loading', type:'text', ph:'961st'},
  {key:'bookingNo', label:"Booking no.", party:'amcor', section:'Booking & Loading', type:'text'},
  {key:'bookingDate', label:"Booking date", party:'amcor', section:'Booking & Loading', type:'date'},
  {key:'containerNo', label:"Container no.", party:'amcor', section:'Booking & Loading', type:'text'},
  {key:'actualQty', label:"Actual Q'ty Loaded", party:'amcor', section:'Booking & Loading', type:'number'},
  {key:'loadingDate', label:"Loading date", party:'amcor', section:'Booking & Loading', type:'date'},
  {key:'loadingWeek', label:"Loading Week", party:'amcor', section:'Booking & Loading', type:'week'},

  {key:'transitPort', label:"Transition Port", party:'amcor', section:'Transit / Original Plan', type:'text'},
  {key:'origVesselName', label:"Original Vessel name", party:'amcor', section:'Transit / Original Plan', type:'text'},
  {key:'origEtdRotterdam', label:"Original ETD Rotterdam Port", party:'amcor', section:'Transit / Original Plan', type:'date'},

  {key:'origEtaSongkhla', label:"Original ETA Songkhla", party:'amcor', section:'ETA Songkhla (plan)', type:'date'},
  {key:'revIEtaSongkhla', label:"Rev.I ETA Songkhla", party:'amcor', section:'ETA Songkhla (plan)', type:'date'},
  {key:'revIIEtaSongkhla', label:"Rev.II ETA Songkhla", party:'amcor', section:'ETA Songkhla (plan)', type:'date'},

  {key:'actualVessel1', label:"Actual Vessel name", party:'siamtin', section:'Rotterdam departure', type:'text'},
  {key:'atdRotterdam1', label:"ATD Rotterdam Port", party:'siamtin', section:'Rotterdam departure', type:'date'},
  {key:'atdWeek1', label:"ATD week", party:'siamtin', section:'Rotterdam departure', type:'week'},

  {key:'actualVessel2', label:"Actual Vessel name", party:'siamtin', section:'Rotterdam → Port Klang', type:'text'},
  {key:'atdRotterdam2', label:"ATD Rotterdam Port", party:'siamtin', section:'Rotterdam → Port Klang', type:'date'},
  {key:'atdWeek2', label:"ATD week", party:'siamtin', section:'Rotterdam → Port Klang', type:'week'},
  {key:'etaPortKlang', label:"ETA Port Klang", party:'siamtin', section:'Rotterdam → Port Klang', type:'date'},
  {key:'ataPortKlang', label:"ATA Port Klang", party:'siamtin', section:'Rotterdam → Port Klang', type:'date'},
  {key:'etdPortKlang', label:"ETD Port Klang", party:'siamtin', section:'Rotterdam → Port Klang', type:'date'},
  {key:'actualVessel3', label:"Actual Vessel name", party:'siamtin', section:'Rotterdam → Port Klang', type:'text'},
  {key:'atdPortKlang', label:"ATD Port Klang", party:'siamtin', section:'Rotterdam → Port Klang', type:'date'},

  {key:'etaSingapore', label:"ETA Singapore", party:'siamtin', section:'Port Klang → Singapore', type:'date'},
  {key:'ataSingapore', label:"ATA Singapore", party:'siamtin', section:'Port Klang → Singapore', type:'date'},
  {key:'planVesselName', label:"Plan Vessel name", party:'siamtin', section:'Port Klang → Singapore', type:'text'},
  {key:'etdSingapore', label:"ETD Singapore", party:'siamtin', section:'Port Klang → Singapore', type:'date'},
  {key:'actualVessel4', label:"Actual Vessel name", party:'siamtin', section:'Port Klang → Singapore', type:'text'},
  {key:'atdSingapore', label:"ATD Singapore", party:'siamtin', section:'Port Klang → Singapore', type:'date'},

  {key:'etaTanjungPelepas', label:"ETA Tanjung Pelepas", party:'siamtin', section:'Singapore → Tanjung Pelepas', type:'date'},
  {key:'ataTanjungPelepas', label:"ATA Tanjung Pelepas", party:'siamtin', section:'Singapore → Tanjung Pelepas', type:'date'},
  {key:'etdTanjungPelepas', label:"ETD Tanjung Pelepas", party:'siamtin', section:'Singapore → Tanjung Pelepas', type:'date'},
  {key:'actualVessel5', label:"Actual Vessel name", party:'siamtin', section:'Singapore → Tanjung Pelepas', type:'text'},
  {key:'atdTanjungPelepas', label:"ATD Tanjung Pelepas", party:'siamtin', section:'Singapore → Tanjung Pelepas', type:'date'},

  {key:'etaSongkhla', label:"ETA Songkhla", party:'siamtin', section:'Tanjung Pelepas → Songkhla', type:'date'},
  {key:'ataSongkhla', label:"ATA Songkhla", party:'siamtin', section:'Tanjung Pelepas → Songkhla', type:'date'},
  {key:'ataWeek', label:"ATA Week", party:'siamtin', section:'Tanjung Pelepas → Songkhla', type:'week'},
  {key:'leadTimeWeeks', label:"Lead Time (week)", party:'siamtin', section:'Tanjung Pelepas → Songkhla', type:'leadtime'},
  {key:'notes', label:"Notes", party:'siamtin', section:'Tanjung Pelepas → Songkhla', type:'text'},
];

const COLUMNS_BY_DOME = {sheba: SHEBA_COLUMNS, dine: DINE_COLUMNS};

let rows = [];
let activeTab = 'sheba';
let summaryFilter = 'all';
let saveTimer = null;
let sortState = {sheba:{key:null, dir:1}, dine:{key:null, dir:1}};

function weekOptionsHtml(){
  let opts = '<option value="">-</option>';
  for(let i=1;i<=53;i++){ opts += `<option value="${i}">${i}</option>`; }
  return opts;
}
const WEEK_OPTIONS = weekOptionsHtml();

function uid(){ return 'r' + Date.now().toString(36) + Math.random().toString(36).slice(2,7); }

function newRow(dome){
  const r = {id:uid(), dome, shippingLine:''};
  COLUMNS_BY_DOME[dome].forEach(c=>r[c.key]='');
  return r;
}

function insertRowAfter(afterId, dome){
  const idx = rows.findIndex(r=>r.id===afterId);
  const fresh = newRow(dome);
  if(idx===-1){ rows.push(fresh); }
  else{ rows.splice(idx+1, 0, fresh); }
  saveData();
  renderDomeView(dome);
}

const STORAGE_KEY = 'shipment_tracker_data_v1';

function hasCloudStorage(){
  return typeof window!=='undefined' && !!window.storage && typeof window.storage.get==='function';
}

function persistLocal(){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rows));
    return true;
  }catch(e){
    return false;
  }
}

async function loadData(){
  let loadedFromCloud = false;
  if(hasCloudStorage()){
    try{
      const res = await window.storage.get('rows', true);
      if(res && res.value){
        rows = JSON.parse(res.value);
        loadedFromCloud = true;
      }
    }catch(e){ /* cloud unavailable — fall back to this browser's local copy */ }
  }
  if(!loadedFromCloud){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      rows = raw ? JSON.parse(raw) : [];
    }catch(e){
      rows = [];
    }
  }
  renderAll();
}

function saveData(){
  const savedLocally = persistLocal();
  clearTimeout(saveTimer);
  saveTimer = setTimeout(async ()=>{
    if(hasCloudStorage()){
      try{ await window.storage.set('rows', JSON.stringify(rows), true); }catch(e){ /* local copy already safe */ }
    }
    flashSave(savedLocally ? 'Saved' : 'Save failed — check browser storage settings');
  }, 350);
}

window.addEventListener('beforeunload', persistLocal);

function flashSave(text){
  const t = document.getElementById('save-toast');
  document.getElementById('save-toast-text').textContent = text;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 1400);
}

function formatDateDisplay(iso){
  if(!iso) return '';
  const parts = String(iso).split('-');
  if(parts.length!==3) return iso;
  const [y,m,d] = parts;
  if(!y || !m || !d) return iso;
  return `${d}/${m}/${y}`;
}

function fieldInput(row, col){
  const raw = row[col.key] || '';
  const val = String(raw).replace(/"/g,'&quot;');
  if(col.type==='leadtime'){
    const wk = computeLeadTimeWeeks(row);
    const display = wk===null ? '' : String(wk);
    return `<input type="text" class="leadtime-cell mono" readonly tabindex="-1" value="${display}" placeholder="—" title="Loading date → ATA Songkhla">`;
  }
  if(col.type==='date'){
    const nativeId = `dn__${row.id}__${col.key}`;
    return `<div class="date-wrap">
      <input type="text" class="date-text" readonly value="${formatDateDisplay(val)}" placeholder="DD/MM/YYYY">
      <input type="date" class="date-native" id="${nativeId}" data-id="${row.id}" data-key="${col.key}" value="${val}">
      <button type="button" class="date-cal-btn" data-target="${nativeId}" tabindex="-1" title="Open calendar">
        <svg viewBox="0 0 24 24" fill="none"><rect x="3.5" y="5" width="17" height="15" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
      </button>
    </div>`;
  }
  if(col.type==='week'){
    const opts = WEEK_OPTIONS.replace(`value="${val}"`, `value="${val}" selected`);
    return `<select data-id="${row.id}" data-key="${col.key}">${opts}</select>`;
  }
  if(col.type==='number'){
    return `<input type="number" inputmode="numeric" data-id="${row.id}" data-key="${col.key}" value="${val}" placeholder="${col.ph||'0'}">`;
  }
  return `<input type="text" data-id="${row.id}" data-key="${col.key}" value="${val}" placeholder="${col.ph||''}">`;
}

function shippingLineSelect(row){
  const val = row.shippingLine || '';
  let opts = '<option value="">-</option>';
  SHIPPING_LINES.forEach(line=>{
    opts += `<option value="${line}"${val===line?' selected':''}>${line}</option>`;
  });
  return `<select data-id="${row.id}" data-key="shippingLine">${opts}</select>`;
}

function buildRuns(cols, prop){
  const runs = [];
  cols.forEach(c=>{
    const last = runs[runs.length-1];
    if(last && last.value===c[prop]){ last.span++; }
    else{ runs.push({value:c[prop], span:1}); }
  });
  return runs;
}

function sortIndicator(dome, key){
  const state = sortState[dome];
  if(state.key !== key) return '';
  return state.dir===1 ? ' \u25B2' : ' \u25BC';
}

function sortDome(dome, key, type){
  const state = sortState[dome];
  const dir = (state.key===key) ? -state.dir : 1;
  sortState[dome] = {key, dir};
  const domeItems = rows.filter(r=>r.dome===dome);
  const others = rows.filter(r=>r.dome!==dome);
  domeItems.sort((a,b)=>{
    if(type==='leadtime'){
      const la = computeLeadTimeWeeks(a);
      const lb = computeLeadTimeWeeks(b);
      if(la===null && lb===null) return 0;
      if(la===null) return 1;
      if(lb===null) return -1;
      return dir*(la-lb);
    }
    const av = (a[key]||'').toString();
    const bv = (b[key]||'').toString();
    if(av==='' && bv==='') return 0;
    if(av==='') return 1;
    if(bv==='') return -1;
    if(type==='number' || type==='week'){ return dir*(num(av)-num(bv)); }
    if(type==='date'){ return dir*(av<bv?-1:av>bv?1:0); }
    return dir*av.localeCompare(bv);
  });
  rows = [...others, ...domeItems];
  saveData();
  renderDomeView(dome);
}

function renderDomeView(dome){
  const container = document.getElementById('view-' + dome);
  const COLUMNS = COLUMNS_BY_DOME[dome];
  const domeRows = rows.filter(r=>r.dome===dome);
  const label = dome==='sheba' ? 'SHEBA DOME' : 'DINE DOME';

  let html = `
    <div class="toolbar">
      <div class="toolbar-left">
        <span class="dome-badge ${dome}">${label}</span>
        <div class="party-legend">
          <span class="party-tag"><span class="sw" style="background:var(--rust-600)"></span>Siam Tin</span>
          <span class="party-tag"><span class="sw" style="background:var(--teal-600)"></span>Amcor</span>
        </div>
        <span class="row-count">${domeRows.length} PO row${domeRows.length===1?'':'s'}</span>
      </div>
      <button class="btn primary" data-add="${dome}">+ Add PO Row</button>
    </div>
  `;

  if(domeRows.length===0){
    html += `<div class="table-scroll"><div class="empty-state"><div class="big">No data yet in ${label}</div>Click "+ Add PO Row" to start entering your first PO.</div></div>`;
    container.innerHTML = html;
    attachToolbarEvents(container);
    return;
  }

  const partyRuns = buildRuns(COLUMNS, 'party');
  const sectionRuns = buildRuns(COLUMNS, 'section');

  html += `<div class="table-scroll"><table>
    <thead>
      <tr class="party-row">
        <th class="g-meta" colspan="3"></th>
        ${partyRuns.map(r=>`<th class="g-${r.value}" colspan="${r.span}">${r.value==='siamtin'?'Siam Tin':'Amcor'}</th>`).join('')}
      </tr>
      <tr class="section-row">
        <th class="sec-meta" colspan="3"></th>
        ${sectionRuns.map(r=>{
          const col0 = COLUMNS[0];
          return `<th class="sec-${(COLUMNS.find(c=>c.section===r.value)||col0).party}" colspan="${r.span}">${r.value}</th>`;
        }).join('')}
      </tr>
      <tr class="field-row">
        <th>No.</th>
        <th class="sortable" data-sort-key="shippingLine">Shipping Line${sortIndicator(dome,'shippingLine')}</th>
        <th></th>
        ${COLUMNS.map(c=>`<th class="sortable" data-sort-key="${c.key}">${c.label}${sortIndicator(dome,c.key)}</th>`).join('')}
      </tr>
    </thead>
    <tbody>`;

  domeRows.forEach((r,i)=>{
    html += `<tr data-row-id="${r.id}">
      <td class="idx-col">${i+1}</td>
      <td class="col-carrier">${shippingLineSelect(r)}</td>
      <td class="action-col">
        <div class="row-actions">
          <button class="row-add" data-insert="${r.id}" title="Insert a new row below this one">+</button>
          <button class="row-del" data-del="${r.id}" title="Delete this row">×</button>
        </div>
      </td>
      ${COLUMNS.map(c=>`<td class="col-${c.party}">${fieldInput(r,c)}</td>`).join('')}
    </tr>`;
  });

  html += `</tbody></table></div>`;
  container.innerHTML = html;
  attachToolbarEvents(container);
  attachTableEvents(container, dome);
}

function attachToolbarEvents(container){
  const addBtn = container.querySelector('[data-add]');
  if(addBtn){
    addBtn.addEventListener('click', ()=>{
      rows.push(newRow(addBtn.dataset.add));
      saveData();
      renderDomeView(addBtn.dataset.add);
    });
  }
}

function attachTableEvents(container, dome){
  container.querySelectorAll('input:not(.date-native):not(.date-text):not(.leadtime-cell), select').forEach(el=>{
    el.addEventListener('input', onFieldChange);
    el.addEventListener('change', onFieldChange);
  });
  container.querySelectorAll('.date-native').forEach(el=>{
    el.addEventListener('change', onDateNativeChange);
  });
  container.querySelectorAll('[data-del]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const id = btn.dataset.del;
      const row = rows.find(r=>r.id===id);
      const dome = row ? row.dome : activeTab;
      if(!confirm('Delete this row? This cannot be undone.')) return;
      rows = rows.filter(r=>r.id!==id);
      saveData();
      renderDomeView(dome);
    });
  });
  container.querySelectorAll('[data-insert]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      insertRowAfter(btn.dataset.insert, dome);
    });
  });
  container.querySelectorAll('[data-sort-key]').forEach(th=>{
    th.addEventListener('click', ()=>{
      const key = th.dataset.sortKey;
      const col = COLUMNS_BY_DOME[dome].find(c=>c.key===key);
      const type = key==='shippingLine' ? 'text' : (col ? col.type : 'text');
      sortDome(dome, key, type);
    });
  });
}

function onDateNativeChange(e){
  const id = e.target.dataset.id;
  const key = e.target.dataset.key;
  const row = rows.find(r=>r.id===id);
  if(row){
    row[key] = e.target.value;
    saveData();
    const wrap = e.target.closest('.date-wrap');
    const disp = wrap ? wrap.querySelector('.date-text') : null;
    if(disp) disp.value = formatDateDisplay(e.target.value);
  }
}

function onFieldChange(e){
  const id = e.target.dataset.id;
  const key = e.target.dataset.key;
  const row = rows.find(r=>r.id===id);
  if(row){
    row[key] = e.target.value;
    saveData();
  }
}

/* ---------- Summary ---------- */
function renderSummaryFilters(){
  const el = document.getElementById('summary-filters');
  const opts = [
    {v:'all', l:'All'},
    {v:'sheba', l:'SHEBA DOME'},
    {v:'dine', l:'DINE DOME'},
  ];
  el.innerHTML = opts.map(o=>`<button class="filter-chip ${summaryFilter===o.v?'active':''}" data-filter="${o.v}">${o.l}</button>`).join('');
  el.querySelectorAll('[data-filter]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      summaryFilter = btn.dataset.filter;
      renderSummary();
    });
  });
}

function num(v){ const n = parseFloat(v); return isNaN(n) ? 0 : n; }

/* Lead Time (week) = from Loading date until ATA Songkhla, expressed in weeks (1 decimal) */
function computeLeadTimeWeeks(row){
  if(!row || !row.loadingDate || !row.ataSongkhla) return null;
  const d1 = new Date(row.loadingDate);
  const d2 = new Date(row.ataSongkhla);
  if(isNaN(d1) || isNaN(d2)) return null;
  const diffDays = (d2 - d1) / 86400000;
  if(diffDays < 0) return null;
  return Math.round((diffDays/7)*10)/10;
}

function computeSummary(filtered){
  const totalPoQty = filtered.reduce((s,r)=>s+num(r.poQty),0);
  const totalActual = filtered.reduce((s,r)=>s+num(r.actualQty),0);
  const totalDiff = totalPoQty - totalActual;
  const totalShipments = filtered.length;

  const poMap = new Map();
  filtered.forEach(r=>{
    const po = (r.poNo || '').trim();
    if(!po) return;
    if(!poMap.has(po)) poMap.set(po, {poQty:0, poQtySet:false, actual:0, count:0, leadSum:0, leadCount:0});
    const g = poMap.get(po);
    if(!g.poQtySet && r.poQty){ g.poQty = num(r.poQty); g.poQtySet = true; }
    g.actual += num(r.actualQty);
    g.count += 1;
    const lt = computeLeadTimeWeeks(r);
    if(lt !== null){ g.leadSum += lt; g.leadCount += 1; }
  });
  const totalPoCount = poMap.size;

  const weekMap = new Map();
  filtered.forEach(r=>{
    const wk = (r.loadingWeek || '').trim();
    if(!wk) return;
    if(!weekMap.has(wk)) weekMap.set(wk, {count:0, qty:0});
    const g = weekMap.get(wk);
    g.count += 1;
    g.qty += num(r.actualQty);
  });

  return {totalPoQty, totalActual, totalDiff, totalShipments, totalPoCount, poMap, weekMap};
}

function niceCeil(v){
  if(v<=0) return 10;
  const exp = Math.floor(Math.log10(v));
  const base = Math.pow(10, exp);
  const n = v/base;
  let niceN;
  if(n<=1) niceN=1; else if(n<=2) niceN=2; else if(n<=5) niceN=5; else niceN=10;
  return niceN*base;
}

function truncateLabel(str, n){
  return str.length>n ? str.slice(0,n-1)+'\u2026' : str;
}

function escapeXml(str){
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;');
}

function renderPoChart(poMap){
  const container = document.getElementById('po-chart');
  if(!container) return;
  const entries = [...poMap.entries()].sort((a,b)=>a[0].localeCompare(b[0]));
  if(entries.length===0){
    container.innerHTML = `<div class="empty-state"><div class="big">No PO data yet</div>Add PO rows in SHEBA DOME or DINE DOME to see the comparison chart.</div>`;
    return;
  }
  const maxVal = Math.max(1, ...entries.map(([po,g])=>Math.max(g.poQty||0, g.actual||0)));
  const niceMax = niceCeil(maxVal);
  const plotH = 170;
  const groupW = 78;
  const barW = 24;
  const leftPad = 60;
  const topPad = 16;
  const bottomPad = 66;
  const width = leftPad + entries.length*groupW + 20;
  const height = topPad + plotH + bottomPad;

  const gridSteps = 4;
  let gridSvg = '';
  for(let i=0;i<=gridSteps;i++){
    const y = topPad + plotH - (plotH*i/gridSteps);
    const val = Math.round(niceMax*i/gridSteps);
    gridSvg += `<line x1="${leftPad}" y1="${y}" x2="${width-10}" y2="${y}" stroke="#E1E5E8" stroke-width="1"/>`;
    gridSvg += `<text x="${leftPad-8}" y="${y+3.5}" text-anchor="end" font-size="10" font-family="IBM Plex Mono, monospace" fill="#8A97A2">${val.toLocaleString()}</text>`;
  }

  let barsSvg = '';
  entries.forEach(([po,g], idx)=>{
    const gx = leftPad + idx*groupW;
    const poH = Math.max(0,(g.poQty||0)/niceMax*plotH);
    const actH = Math.max(0,(g.actual||0)/niceMax*plotH);
    const poY = topPad+plotH-poH;
    const actY = topPad+plotH-actH;
    const poX = gx + (groupW-barW*2-6)/2;
    const actX = poX + barW + 6;
    const labelX = gx+groupW/2;
    const labelY = topPad+plotH+14;
    barsSvg += `
      <rect x="${poX}" y="${poY}" width="${barW}" height="${poH}" fill="#3D6A85" rx="2">
        <title>${escapeXml(po)} — PO Quantity: ${(g.poQty||0).toLocaleString()}</title>
      </rect>
      <rect x="${actX}" y="${actY}" width="${barW}" height="${actH}" fill="#E0A526" rx="2">
        <title>${escapeXml(po)} — Actual Q'ty Loaded: ${(g.actual||0).toLocaleString()}</title>
      </rect>
      <text x="${labelX}" y="${labelY}" text-anchor="end" font-size="10" font-family="Inter, sans-serif" fill="#48545F" transform="rotate(-40 ${labelX} ${labelY})">${escapeXml(truncateLabel(po,16))}</text>
    `;
  });

  const baseline = `<line x1="${leftPad}" y1="${topPad+plotH}" x2="${width-10}" y2="${topPad+plotH}" stroke="#B7C6D3" stroke-width="1.4"/>`;

  container.innerHTML = `<div class="chart-scroll"><svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" style="min-width:${width}px;display:block;margin:0 auto;">
    ${gridSvg}
    ${baseline}
    ${barsSvg}
  </svg></div>
  <div class="chart-legend">
    <span class="chart-legend-item"><span class="sw" style="background:#3D6A85"></span>PO Quantity</span>
    <span class="chart-legend-item"><span class="sw" style="background:#E0A526"></span>Actual Q'ty Loaded</span>
  </div>`;
}

function renderSummary(){
  renderSummaryFilters();
  const filtered = rows.filter(r => summaryFilter==='all' ? true : r.dome===summaryFilter);
  const {totalPoQty, totalActual, totalDiff, totalShipments, totalPoCount, poMap, weekMap} = computeSummary(filtered);

  document.getElementById('kpi-grid').innerHTML = `
    <div class="kpi-card"><div class="kpi-label">Total PO Quantity</div><div class="kpi-value">${totalPoQty.toLocaleString()}</div></div>
    <div class="kpi-card"><div class="kpi-label">Total Actual Q'ty Loaded</div><div class="kpi-value">${totalActual.toLocaleString()}</div></div>
    <div class="kpi-card"><div class="kpi-label">Diff (PO − Actual)</div><div class="kpi-value ${totalDiff>0?'pos':totalDiff<0?'neg':''}">${totalDiff.toLocaleString()}</div></div>
    <div class="kpi-card"><div class="kpi-label">PO Count (opened)</div><div class="kpi-value">${totalPoCount.toLocaleString()}</div></div>
    <div class="kpi-card"><div class="kpi-label">Shipment Count</div><div class="kpi-value">${totalShipments.toLocaleString()}</div></div>
  `;

  renderPoChart(poMap);

  const poBody = document.getElementById('po-summary-body');
  if(poMap.size===0){
    poBody.innerHTML = `<tr><td colspan="6" style="font-family:'Inter',sans-serif;color:var(--ink-400);text-align:center;padding:20px;">No PO data yet</td></tr>`;
  }else{
    let html = '';
    [...poMap.entries()].sort((a,b)=>a[0].localeCompare(b[0])).forEach(([po,g])=>{
      const diff = g.poQty - g.actual;
      const pillClass = diff>0 ? 'short' : diff<0 ? 'over' : 'match';
      const pillLabel = diff>0 ? `Short ${diff.toLocaleString()}` : diff<0 ? `Over ${Math.abs(diff).toLocaleString()}` : 'Match';
      const avgLead = g.leadCount ? (g.leadSum/g.leadCount) : null;
      const avgLeadDisplay = avgLead===null ? '—' : avgLead.toFixed(1);
      html += `<tr>
        <td>${po}</td>
        <td>${g.poQty.toLocaleString()}</td>
        <td>${g.actual.toLocaleString()}</td>
        <td><span class="diff-pill ${pillClass}">${pillLabel}</span></td>
        <td>${g.count}</td>
        <td>${avgLeadDisplay}</td>
      </tr>`;
    });
    poBody.innerHTML = html;
  }

  const weekBody = document.getElementById('week-summary-body');
  if(weekMap.size===0){
    weekBody.innerHTML = `<tr><td colspan="3" style="font-family:'Inter',sans-serif;color:var(--ink-400);text-align:center;padding:20px;">No Loading Week data yet</td></tr>`;
  }else{
    let html = '';
    [...weekMap.entries()].sort((a,b)=>Number(a[0])-Number(b[0])).forEach(([wk,g])=>{
      html += `<tr><td>Week ${wk}</td><td>${g.count}</td><td>${g.qty.toLocaleString()}</td></tr>`;
    });
    weekBody.innerHTML = html;
  }
}

function renderAll(){
  renderDomeView('sheba');
  renderDomeView('dine');
  renderSummary();
}

/* ---------- Export to Excel ---------- */
function buildDomeSheet(dome){
  const COLUMNS = COLUMNS_BY_DOME[dome];
  const domeRows = rows.filter(r=>r.dome===dome);
  const partyRow = ['', '', ...COLUMNS.map(c=>c.party==='siamtin'?'Siam Tin':'Amcor')];
  const sectionRow = ['', '', ...COLUMNS.map(c=>c.section)];
  const fieldRow = ['No.', 'Shipping Line', ...COLUMNS.map(c=>c.label)];
  const dataRows = domeRows.map((r,i)=>[i+1, r.shippingLine||'', ...COLUMNS.map(c=>{
    if(c.type==='date') return formatDateDisplay(r[c.key]);
    if(c.type==='leadtime'){ const wk = computeLeadTimeWeeks(r); return wk===null ? '' : wk; }
    return r[c.key]||'';
  })]);
  const aoa = [partyRow, sectionRow, fieldRow, ...dataRows];
  const ws = XLSX.utils.aoa_to_sheet(aoa);
  ws['!cols'] = [{wch:5}, {wch:14}, ...COLUMNS.map(c=>({wch: Math.max(12, Math.min(28, c.label.length+2))}))];
  ws['!freeze'] = {xSplit:1, ySplit:3};
  return ws;
}

function buildSummarySheet(){
  const {poMap, weekMap, totalPoCount, totalShipments} = computeSummary(rows);
  const aoa = [];
  aoa.push(["PO Count (opened)", totalPoCount]);
  aoa.push(["Shipment Count", totalShipments]);
  aoa.push([]);
  aoa.push(["PO No. (PO date)", "PO Quantity", "Actual Q'ty Loaded (total)", "Diff", "Shipment Count", "Avg Lead Time (week)"]);
  [...poMap.entries()].sort((a,b)=>a[0].localeCompare(b[0])).forEach(([po,g])=>{
    const avgLead = g.leadCount ? Math.round((g.leadSum/g.leadCount)*10)/10 : '';
    aoa.push([po, g.poQty||0, g.actual||0, (g.poQty||0)-(g.actual||0), g.count, avgLead]);
  });
  aoa.push([]);
  aoa.push(["Loading Week", "Shipment Count", "Total Qty Loaded"]);
  [...weekMap.entries()].sort((a,b)=>Number(a[0])-Number(b[0])).forEach(([wk,g])=>{
    aoa.push(["Week " + wk, g.count, g.qty]);
  });
  const ws = XLSX.utils.aoa_to_sheet(aoa);
  ws['!cols'] = [{wch:26},{wch:16},{wch:22},{wch:14},{wch:16},{wch:18}];
  return ws;
}

function exportToExcel(){
  if(typeof XLSX === 'undefined'){
    flashSave('Failed to load Excel library, please try again');
    return;
  }
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, buildDomeSheet('sheba'), 'SHEBA DOME');
  XLSX.utils.book_append_sheet(wb, buildDomeSheet('dine'), 'DINE DOME');
  XLSX.utils.book_append_sheet(wb, buildSummarySheet(), 'SUMMARY');
  const stamp = new Date().toISOString().slice(0,10);
  XLSX.writeFile(wb, `Shipment_Tracker_${stamp}.xlsx`);
  flashSave('Exported');
}

document.getElementById('export-btn').addEventListener('click', exportToExcel);

document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    activeTab = btn.dataset.tab;
    document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
    document.getElementById('view-' + activeTab).classList.add('active');
    if(activeTab==='summary') renderSummary();
  });
});

/* ---------- Login / Logout ---------- */
const VALID_USERNAME = '5699';
const VALID_PASSWORD = '123456';
let dataLoaded = false;

document.getElementById('login-form').addEventListener('submit', function(e){
  e.preventDefault();
  const u = document.getElementById('login-user').value.trim();
  const p = document.getElementById('login-pass').value;
  const errorEl = document.getElementById('login-error');
  if(u === VALID_USERNAME && p === VALID_PASSWORD){
    errorEl.style.display = 'none';
    document.getElementById('login-overlay').style.display = 'none';
    document.getElementById('app-root').style.display = '';
    if(!dataLoaded){ dataLoaded = true; loadData(); }
  }else{
    errorEl.style.display = 'block';
    document.getElementById('login-pass').value = '';
    document.getElementById('login-pass').focus();
  }
});

document.getElementById('logout-btn').addEventListener('click', function(){
  document.getElementById('app-root').style.display = 'none';
  document.getElementById('login-overlay').style.display = 'flex';
  document.getElementById('login-form').reset();
  document.getElementById('login-error').style.display = 'none';
  document.getElementById('login-user').focus();
});