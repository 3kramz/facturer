import React from 'react';
import { Link } from 'react-router-dom'

const Parts = () => {
    return (

        <div class='w-full'>
            <h3 className="text-4xl text-center mt-20 mb-10">Our top parts</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center ">
                <div class="card w-96 bg-base-200 shadow-xl">
                    <figure>
                        <img  class="rounded-lg mt-5" src="https://www.maxbhi.com/images/thumbnails/150/150/detailed/2509/lcd_with_touch_screen_for_asus_zenfone_max_pro_m1_zb601kl_black_by_maxbhi_com_35923.jpg" alt="Display" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Display</h2>
                        <p>LCD with touch screen for vivo v17 pro-white(Display combo folder)</p>
                        <div class="card-actions justify-end">
                            <Link to="/purches" class="btn btn-primary">Place Order</Link>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-200 shadow-xl">
                    <figure>
                        <img class="rounded-lg mt-5"  src="https://www.maxbhi.com/images/thumbnails/150/150/detailed/2509/lcd_with_touch_screen_for_asus_zenfone_max_pro_m1_zb601kl_black_by_maxbhi_com_35923.jpg" alt="Display" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Display</h2>
                        <p>LCD with touch screen for vivo v17 pro-white(Display combo folder)</p>
                        <div class="card-actions justify-end">
                            <Link to="/purches" class="btn btn-primary">Place Order</Link>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-200 shadow-xl">
                    <figure>
                        <img class="rounded-lg mt-5"  src="https://www.maxbhi.com/images/thumbnails/150/150/detailed/2509/lcd_with_touch_screen_for_asus_zenfone_max_pro_m1_zb601kl_black_by_maxbhi_com_35923.jpg" alt="Display" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Display</h2>
                        <p>LCD with touch screen for vivo v17 pro-white(Display combo folder)</p>
                        <div class="card-actions justify-end">
                            <Link to="/purches" class="btn btn-primary">Place Order</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Link to='/parts' class="btn btn-wide btn-primary  flex btn-outline  m-10 ">See All</Link>
        </div >
    );
};

export default Parts;