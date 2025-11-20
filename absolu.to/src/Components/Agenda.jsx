import React from 'react'

const Agenda = () => {
  return (
    <div style={{ width: '100%', height: '600px' }}>
      <iframe
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2vuoU832a8lHnPMTU9yFylNcMJqADOtdJn1MTgcsCjgQ8TmkL5UcEIzDD45duQUzUUMY5VNR_M?gv=true"
        style={{ border: 0, width: '100%', height: '100%' }}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Agenda;