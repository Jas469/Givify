import { FaQuestionCircle } from 'react-icons/fa'
export default function Faq() {
  return (<>
    <div className="flex-col w-[800px] p-3 xsm:w-[100%]">
      <div className="flex">
        <div className="accordion" id="accordionFlushExample">
          <div className="accordion-item focus-within:bg-black">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed xsm:text-sm" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                What is the minimum percentile required ?
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse " aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body xsm:text-sm">The minimum percentile required is 90 percentile.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed xsm:text-sm" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                What is centralized online councelling
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body xsm:text-sm">Through Centralized Online Counselling candidates can get admission in the Constituent Campuses/Affiliated Colleges of participating Universities according to their choice on the basis of their Rank/Merit by participating online. A candidate requires an internet enabled device (i.e. Laptop / Desktop / Tablet etc.) and can participate in centralized online counselling from anywhere. All the activities i.e. from counselling fee deposition to allotment of seats, shall be done online through web module.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed xsm:text-sm" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Centralized Online Counselling Process
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body  xsm:text-sm">Centralized Online Counselling Registration<br />
                Online Counselling Fee Payment<br />
                Preparation of Rank<br />
                Choice Filling<br />
                Allotment of Seat<br />
                Online Reporting at Allotted Institute (By uploading the requisite Documents on portal and Depositing the Semester Fee through Online Mode and Uploading the Fee Slip on portal)<br />
                Provisional Confirmation by allotted Institute after Verification of relevant uploaded Documents/Certificates and Verification of Uploaded Semester Fee Slip</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}