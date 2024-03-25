'use client'
import CardStatistic from "@/app/components/CardStatistic";
import DataTables from "@/app/components/DataTables";
import Script from "@/assets/script";

export default function HomeComponent() {
    const { handleAlert } = Script()
    return (
        <>
            <div className="bg-hero"></div>
            <div className="container row-column gap-3 card-statistic-wrapper">
                <CardStatistic statisticName="Products" solidIcon="fa-boxes" data={233} dataFooter={5 + " Product Out of Stock"} />
                <CardStatistic statisticName="Income this Month" solidIcon="fa-coins" data={"Rp. 250.000"} dataFooter={"Estimate Rp. 1M Per Years"} />
                <CardStatistic statisticName="Deliver" solidIcon="fa-truck-ramp-box" data={29} dataFooter={11 + " Need Confirmation"} />
                <CardStatistic statisticName="Users" solidIcon="fa-users" data={11} dataFooter={7 + " Users Not Verified"} />
            </div>

            <div className="paths-wrapper">
                <span>Dashboard</span>
            </div>

            <div className="container row-column gap-3">
                <div className="card">
                    <DataTables />
                </div>
                <div className="row-md gap">
                    <div className="card row-column gap-3 flex-grow">
                        <input type="file" className="form-ctrl" />
                        <input type="text" className="form-ctrl" placeholder="Ini adalah form custom" />
                        <select className="form-ctrl">
                            <option value={""}>- Select Option -</option>
                            <option value={"option1"}>Option 1</option>
                            <option value={"option2"}>Option 2</option>
                            <option value={"option3"}>Option 3</option>
                        </select>
                        <textarea rows={7} className="form-ctrl" placeholder="Ini adalah form custom"></textarea>
                    </div>
                    <div className="card row-column gap">
                        <button type="button" className="btn btn-primary">Button Primary</button>
                        <button type="button" className="btn btn-success">Button Success</button>
                        <button type="button" className="btn btn-danger">Button Danger</button>
                        <button type="button" className="btn btn-warning">Button Warning</button>
                        <button type="button" className="btn btn-info">Button Info</button>
                        <button type="button" className="btn btn-info" onClick={() => handleAlert('success', 'Success!', 'Berhasil Menampilkan Alert!')}>Show Alert</button>
                    </div>
                </div>
            </div>
        </>
    )
}