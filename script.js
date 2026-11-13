/* QuvionX Industries – static navigation and enquiry behaviour (no animation). */
(function(){
  'use strict';
  const $ = sel => document.querySelector(sel);
  const toggle=$('.menu-toggle'),nav=$('.site-nav');
  function closeNav(){if(!toggle||!nav)return;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open menu');nav.classList.remove('is-open');}
  if(toggle&&nav){
    toggle.addEventListener('click',()=>{let open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu');nav.classList.toggle('is-open',open)});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeNav));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeNav()});
    document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!toggle.contains(e.target))closeNav()});
  }
  const year=$('#year');if(year)year.textContent=String(new Date().getFullYear());
  // Contact form composes a message locally; no third-party scripts or backend collection.
  const form=$('#quote-form'),product=$('#product'),status=$('#form-status');
  if(form&&product){
    const params=new URLSearchParams(window.location.search);
    const chosen=params.get('product');
    if(chosen&&[...product.options].some(o=>o.value===chosen))product.value=chosen;
    const assemble=()=>{
      if(!form.reportValidity())return null;
      const qty=$('#quantity').value;
      const prod=product.value;
      const title='QuvionX product enquiry - '+prod+' ('+qty+' unit'+(qty==='1'?'':'s')+')';
      const body=['Hello QuvionX Industries,','','I would like to request a quotation.','',
        'Product: '+prod,
        'Build format: '+$('#format').value,
        'Quantity: '+qty,
        'Event / category: '+($('#event').value.trim()||'Not specified'),
        'Requirements: '+($('#requirements').value.trim()||'Please contact me to discuss.'),'',
        'Please advise on specifications, price, lead time and delivery.','','Name:','Phone:','Location:'].join('\n');
      return{title,body};
    };
    form.addEventListener('submit',e=>{
      e.preventDefault();let data=assemble();if(!data)return;
      if(status)status.textContent='Your email application will open with the prepared enquiry. Please review and press Send.';
      location.href='mailto:mahaananth.nivas@quvionxindia.com?subject='+encodeURIComponent(data.title)+'&body='+encodeURIComponent(data.body);
    });
    const wa=$('#whatsapp-quote');
    if(wa)wa.addEventListener('click',()=>{
      let data=assemble();if(!data)return;
      if(status)status.textContent='Opening WhatsApp. Please review the drafted enquiry and press Send.';
      location.href='https://wa.me/919843430172?text='+encodeURIComponent(data.body);
    });
  }
})();
