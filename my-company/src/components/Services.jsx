function Services() {

     return (
       <div style={{ padding: '20px' }}>
         <h1 style={{ color: '#004080', marginBottom: '15px' }}>Our Services</h1>
         <ul {{ listStyleType: 'circle', paddingLeft: '20px', fontSize: '1.1rem', color: '#333' }}>

           <li key={index} style={{ marginBottom: '8px' }}>Technology Consulting</li>
           <li>Market Analysis</li>
           <li>Product Development</li>
         </ul>
       </div>
     );
   }

   export default Services;