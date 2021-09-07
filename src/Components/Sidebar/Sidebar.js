import React from 'react';
import '../CSS/Sidebar.css';

const Sidebar = () => {
    return (
        <section>
            <h3 className="text-center">Latest News</h3>
            <div className="sidebar">
                <ul>
                    <li><a href="https://www.thedailystar.net/world/europe/news/robbers-steal-jewels-worth-10-mln-euros-paris-bulgari-store-2170761">Robbers steal jewels worth ...... </a></li>
                    <li><a href="https://www.thedailystar.net/news/asia/south-asia/news/taliban-announce-leader-first-ministers-new-government-2170706">Taliban name new Afghan government, interior ...... </a></li>
                    <li><a href="https://www.thedailystar.net/youth/education/campus/news/ssc-hsc-examinees-likely-attend-4-classes-each-day-2170731">SSC, HSC examinees likely to attend 4 classes ...... </a></li>
                    <li><a href="https://www.thedailystar.net/news/bangladesh/crime-justice/news/major-retd-sinha-murder-liaqat-ali-fired-the-shot-pradeep-confirmed-the-death-2170716">Sinha murder:</a></li>
                    <li><a href="https://www.thedailystar.net/sports/football/news/match-officials-told-us-they-could-play-cbf-president-2170381">Match officials told us they could play: CBF ...... </a></li>
                </ul>
            </div>
        </section>
    );
};

export default Sidebar;