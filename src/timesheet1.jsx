import  { useState } from 'react' ;
const Timesheet = (props) => {
    const [ hoursMon , SetMon] = useState('');
    const [ hoursTue , SetTue] = useState('');
    const [ hoursWed , SetWed] = useState('');
    const [ hoursThr , SetThur] = useState('');
    const [ hoursFri , SetFri] = useState('');
    const [ hoursSat , SetSat] = useState('');
    const [ hoursSun , SetSun] = useState('');

    const [ descMon , SetMonDesc] = useState('');
    const [ descTue , SetTueDesc] = useState('');
    const [ descWed , SetWedDesc] = useState('');
    const [ descThr , SetThrDesc] = useState('');
    const [ descFri , SetFriDesc] = useState('');
    const [ descSat , SetSatDesc] = useState('');
    const [ descSun , SetSunDesc] = useState('');

    const[ empName , setEmpName] = useState('');
    const[ empId , setEmpId] = useState('');
    let [employeeRecords , setEmpRecords] = useState([]);
    
  const  submitTimesheetDetails = e => {
    e.preventDefault();

        let details = {
            "Name":empName ,
            "Id"  :  empId ,
            "MonData" : {"hours" : hoursMon , "desc" : descMon} ,
            "TueData" : { "hours" :hoursTue , "desc" : descTue } ,
            "WedData" : { "hours" :hoursWed , "desc" : descWed } ,
            "ThrData" : { "hours" :hoursThr , "desc" : descThr } ,
            "FriData" : { "hours" :hoursFri ,  "desc" : descFri},
            "SatData" : { "hours" : hoursSat ,  "desc" : descSat} ,
            "SunData" : { "hours" : hoursSun , "desc" : descSun ,
             "isEditable" : true } 
 
            
        }
        let arr = [...employeeRecords];

        let indexToSplice = arr.findIndex(item => item.Id === empId);
        if (indexToSplice !== -1){
            arr.splice(indexToSplice , 1);
        }
        arr.push(details);
        setEmpRecords(arr);

        setEmpId('');
        setEmpName('');
        SetMon('');
        SetTue('');
        SetWed('');
        SetThur('');
        SetFri('');
        SetSat('');
        SetSun('');
        SetMonDesc('');
        SetTueDesc('');
        SetWedDesc('');
        SetThrDesc('');
        SetFriDesc('');
        SetSatDesc('');
        SetSunDesc('');
    }
    const recordEdit = (  e , id) => {
        e.preventDefault();
        let empObj = employeeRecords.filter( item => item.id === id )[0];

        setEmpId(empObj.Id);
        setEmpName(empObj.Name);
        SetMon(empObj.MonData.hours);
        SetTue(empObj.TueData.hours);
        SetWed(empObj.WedData.hours);
        SetThur(empObj.ThrData.hours);
        SetFri(empObj.FriData.hours);
        SetSat(empObj.SatData.hours);
        SetSun(empObj.SunData.hours);

        SetMonDesc(empObj.MonData.desc);
        SetTueDesc(empObj.TueData.desc);
        SetWedDesc(empObj.WedData.desc);
        SetThrDesc(empObj.ThrData.desc);
        SetFriDesc(empObj.FriData.desc);
        SetSatDesc(empObj.SatData.desc);
        SetSunDesc(empObj.SunData.desc);
    }

    return (
        <div style={{width:'100%'}}>
            <h2>Timesheet Detail</h2>
            <br />
            <form action="" onSubmit={e =>submitTimesheetDetails(e)}>
              
                <div className="grid">
                    <div className="row">
                    <div className="col-2">
                        <label htmlFor='empName'>Employee Name</label>
                    </div>
                    <div className="col-3">
                       <input type='text' name='empName' value={empName} onChange={e=> setEmpName(e.target.value)} />
                    </div>
                    <div className="col-2">
                            <label htmlFor="hoursMon">Monday</label></div>
                    <div className="col-2">
                        <input name="hoursMon" type="number" value={hoursMon} onChange={ e=> SetMon(e.target.value)} />
                    </div>
                    <div className="col-3">
                       <input type='text' name='descMon' value={descMon} onChange={e=> SetMonDesc(e.target.value)} />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-2">
                      <label htmlFor='name'>Employee ID</label></div>
                <div className="col-3">
                  <input type='text' name='empId' value={empId} onChange={e=> setEmpId(e.target.value)} /></div>
                        <div className="col-2">
                        <label htmlFor="hoursTue">Tuesday</label>
                        </div>
                        <div className="col-2">
                        <input name="hoursTue" type="number" value={hoursTue} onChange={ e=> SetTue(e.target.value)} />
                        </div>
                        <div className="col-3">
                       <input type='text' name='descTue' value={descTue} onChange={e=> SetTueDesc(e.target.value)} />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-2"></div>
                <div className="col-3"></div>
                        <div className="col-2">
                        <label htmlFor="hoursWed">Wedneday</label> 
                        </div>
                        <div className="col-2">
                        <input name="hoursWed" type="number" value={hoursWed} onChange={ e=> SetWed(e.target.value)} />
                        </div>
                        <div className="col-3">
                       <input type='text' name='descWed' value={descWed} onChange={e=> SetWedDesc(e.target.value)} />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-2"></div>
                <div className="col-3"></div>
                        <div className="col-2">  <label htmlFor="hoursThr">Thursday</label>
                        </div>
                        <div className="col-2">
                        <input name="hoursThr" type="number" value={hoursThr} onChange={ e=> SetThur(e.target.value)} />
                        </div>
                        <div className="col-3">
                       <input type='text' name='descThr' value={descThr} onChange={e=> SetThrDesc(e.target.value)} />
                    </div>
                    </div>
                    <div className="row"> 
                    <div className="col-2"></div>
                <div className="col-3"></div>
                        <div className="col-2">
                        <label htmlFor="hoursFri">Friday</label>
                        </div>
                        <div className="col-2">
                        <input name="hoursFri" type="number" value={hoursFri} onChange={ e=> SetFri(e.target.value)} />

                        </div>
                        <div className="col-3">
                       <input type='text' name='descFri' value={descFri} onChange={e=> SetFriDesc(e.target.value)} />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-2"></div>
                <div className="col-3"></div>
                        <div className="col-2">
                        <label htmlFor="hoursSat">Saturday</label>
                        </div>
                        <div className="col-2">
                        <input name="hoursSat" type="number" value={hoursSat} onChange={ e=> SetSat(e.target.value)} />
                        </div>
                        <div className="col-3">
                       <input type='text' name='descSat' value={descSat} onChange={e=> SetSatDesc(e.target.value)} />
                    </div>
                    
                    </div>
                    <div className="row">

                    <div className="col-2"></div>
                    <div className="col-3"></div>
                        <div className="col-2">
                        <label htmlFor="hoursSun">Sunday</label>
                        </div>
                        
                        <div className="col-2">
                        <input name="hoursSun" type="number" value={hoursSun} onChange={ e=> SetSun(e.target.value)} />
                        
                        </div>
                        <div className="col-3">
                       <input type='text' name='descSun' value={descSun} onChange={e=> SetSunDesc(e.target.value)} />
                    </div>
                       
                    </div>
                    <br />
                    <div className="row">
                        <button type='submit'>Submit</button>

                    

   
                    </div>
                    

                   

                </div>
                  </form>

            <br />
            <div className="grid">
                <div className="row">
                    <div className="col-2">Name</div>
                    <div className="col-1">Id</div>
                    <div className="col-1">Mon</div>
                    <div className="col-1">Tue</div>
                    <div className="col-1">Wed</div>
                    <div className="col-1">Thur</div>
                    <div className="col-1">Fri</div>
                    <div className="col-1">Sat</div>
                    <div className="col-1">Sun</div>
                    <div className="col-1">Action</div>
                </div>
                {  employeeRecords.map(item => {
                    return(
                        <div className="row">
                        <div className="col-2">{item.Name}</div>
                        <div className="col-1">{item.Id}</div>
                        <div className="col-1" title={item.MonData.desc}>{item.MonData.hours}</div>
                        <div className="col-1" title={item.TueData.desc}>{item.TueData.hours}</div>
                        <div className="col-1" title={item.WedData.desc}>{item.WedData.hours}</div>
                        <div className="col-1" title={item.ThrData.desc}>{item.ThrData.hours}</div>
                        <div className="col-1" title={item.FriData.desc}>{item.FriData.hours}</div>
                        <div className="col-1" title={item.SatData.desc}>{item.SatData.hours}</div>
                        <div className="col-1" title={item.SunData.desc}>{item.SunData.hours}</div>
                        <div className="col-1">
                        <button onClick={ e => recordEdit(e, item.ID)}>Edit</button>
                          
                        </div> 
                    </div>

                    )
                })}

            </div>
        </div>
    )

} 
export default Timesheet ;