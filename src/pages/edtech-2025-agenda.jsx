import React, { useState } from 'react';

const EdTech2025Agenda = () => {
  const [activeTab, setActiveTab] = useState('day1');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'day1':
        return (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Day 1 Schedule Table */}
                        <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border border-gray-300">Time</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border border-gray-300">Agenda</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border border-gray-300">Remark</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">7:00 - 8:00</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">Registration & EdTech Exhibition</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">EdTech Cambodia Team</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">8:00 - 8:30</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">
                      Arrival of <strong>H.E. Dr. Hang Chuon Naron</strong>, Deputy Prime Minister, Minister of MoEYS, and the High Esteemed Representative for <strong>Samdech Moha Borvor Thipadei HUN MANET</strong>, Prime Minister of the Kingdom of Cambodia
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">EdTech Cambodia Team</td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-3 text-sm font-bold text-gray-800 border border-gray-300" colSpan="3">
                      Track 1 | High-Level Summit (2,400 Invited Guests Only)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">8:30 - 8:35</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">Cambodian National Anthem</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">EdTech Cambodia Team</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">8:35 - 8:45</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">Welcoming Remarks</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">
                      <strong>H.E. Kim Sethany</strong>, Permanent Secretary of State, MoEYS and Deputy Chair of Organizing Committee of the First Cambodia EdTech Summit
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">8:45 - 8:55</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">Welcoming Remarks</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">
                      <strong>Mr. Simon Perkins</strong>, ICT Division CEO, Cellcard
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">8:55 - 9:05</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">Welcoming Remarks</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">
                      <strong>Dr. Anirban Chatterjee</strong>, Deputy Representative, UNICEF Cambodia
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">9:05 - 9:15</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">Welcoming Remarks</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">
                      <strong>Ms. Moonjung Choi</strong>, Country Director | KOICA
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">9:15 - 9:45</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">Opening Remarks</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">
                      <strong>H.E. Dr. Hang Chuon Naron</strong>, Deputy Prime Minister, MoEYS and the High Esteemed Representative for <strong>Samdech Moha Borvor Thipadei HUN MANET</strong>, Prime Minister of the Kingdom of Cambodia
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">9:45 - 9:55</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">Appreciation Letter for Strategic Partners</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">EdTech Cambodia Team</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">9:55 - 10:05</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">Photo Session</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">EdTech Cambodia Team</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">9:55 - 10:05</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">Official Launch of the Digital Education Strategy for Schools (DESS)</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">
                      <strong>H.E. Dr. Bo Chankoulika</strong>, Under Secretary of State, MoEYS
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">10:05 - 10:15</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">Project Launch: "Strengthening Decisionmakers' Capacities for Appropriate EdTech Use in Cambodia"</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">
                      <strong>Dr. Eng Netra</strong>, Executive Director, Cambodia Development Resource Institute, CDRI
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">10:15 - 10:40</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">
                      <div className="space-y-1">
                        <div style={{ marginBottom: '2.5rem' }}><strong>Press Conference</strong></div>
                        <div>• <strong>H.E. Dr. Hang Chuon Naron</strong> | MoEYS</div>
                        <div>• <strong>Ms. Moonjung Choi</strong>, Country Director | KOICA</div>
                        <div>• <strong>Dr. Anirban Chatterjee</strong>, Deputy Representative, UNICEF Cambodia</div>
                        <div>• <strong>Mr. Simon Perkins</strong> | Cellcard</div>
                        <div>• <strong>Dr. Eng Netra</strong> | CDRI</div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">EdTech Cambodia Team</td>
                  </tr>
                  
                  {/* Strategic Presentations */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">10:25 - 10:40</td>
                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold border border-gray-300">Strategic Presentation 1 | Digital Education Strategy for Schools (DESS)</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">
                      <strong>Dr. Chin Sam Ath</strong>, Deputy Director, Department of Policy, MoEYS
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">10:40 - 10:55</td>
                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold border border-gray-300">Strategic Presentation 2 | Streamline Your School's Operations and Boost Efficiency with a Centralized Dashboard</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">
                      <strong>Mr. Im Chantola</strong>, Lead, Strategy and Partnership, Cellcard
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">10:55 - 12:30</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">
                      <div className="space-y-2">
                        <div style={{ marginBottom: '2.5rem' }}><strong>Panel Discussion 1 | Cambodia Digital School Initiatives Toward Achieving DESS</strong></div>
                        <div className="font-semibold">Triggering Presentation: "Cambodia Digital School"</div>
                        <div className="text-sm">Presented by: <strong>H.E. Tep Phyorith</strong>, Secretary General of General Secretariat, MoEYS</div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">
                      <div className="space-y-1">
                        <div><strong>Moderator: H.E. Dr. Chhim Sitha</strong> – MoEYS's Advisor</div>
                        <div className="mt-2 font-semibold text-gray-700">Panellist:</div>
                        <div>1. <strong>H.E. Tep Phyorith</strong>, Secretary General of General Secretariat, MoEYS</div>
                        <div>2. <strong>Ms. Che Jungwon</strong>, Deputy Country Director, KOICA</div>
                        <div>3. <strong>Mr. Hout Sienghai</strong>, Vice Principal of Preah Sisowat High School-New Generation School (NGS)</div>
                        <div>4. <strong>H.E. Dr. Chea Ratha</strong>, Director of Battambang Teacher Education College</div>
                        <div>5. <strong>Mr. Ngov Sovannarem</strong>, Education Officer, UNICEF Cambodia</div>
                      </div>
                    </td>
                  </tr>
                  
                  {/* Break Time */}
                  <tr className="bg-red-200">
                    <td className="px-4 py-3 text-sm font-bold text-gray-800 border border-gray-300">12:30 - 14:00</td>
                    <td className="px-4 py-3 text-sm font-bold text-gray-800 border border-gray-300">Breaktime & EdTech Exhibition</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300"></td>
                  </tr>
                  
                  {/* Track 2 */}
                  <tr className="bg-gray-200">
                    <td className="px-4 py-3 text-sm font-bold text-gray-800 border border-gray-300" colSpan="3">
                      Track 2 | Skills for Cambodia's Digital Future
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">14:00 - 15:30</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">
                      <div className="space-y-2">
                        <div style={{ marginBottom: '2.5rem' }}><strong>Panel Discussion 2 | Digital Transitions in Education and Skills Development</strong></div>
                        <div className="font-semibold">Triggering Presentation: "Decoding the Demand and Supply: Critical Digital Skills for Cambodia's Evolving Economy"</div>
                        <div className="text-sm">Presented by: <strong>H.E. Hean Samboeum</strong>, Vice-President, CADT</div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">
                      <div className="space-y-1">
                        <div><strong>Moderator: Dr. Song Sopheak</strong>, Deputy Executive Director, CORI</div>
                        <div className="mt-2 font-semibold text-gray-700">Panellist:</div>
                        <div>1. <strong>H.E. Hean Samboeum</strong>, Vice-President, of CADT</div>
                        <div>2. <strong>Mr. Mar Sophea</strong>, Senior Officer in Education and Skills, ADB Cambodia</div>
                        <div>3. <strong>Mr. Kit Sothea</strong>, Deputy Director of the Department of Job Market Information, MoLVT</div>
                        <div>4. <strong>Mrs. Sivhuang Lay</strong>, Managing Director of Digihl Academy</div>
                        <div>5. <strong>Mr. Tin Kotza</strong>, Managing Director and Co-Founder, Coolbeans Digital</div>
                      </div>
                    </td>
                  </tr>
                  
                  {/* Competition */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">15:30 - 15:45</td>
                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold border border-gray-300">2025 Most Innovative EdTech Teacher Competition</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">The Top Three Candidates</td>
                  </tr>
                  
                  {/* Award & Closing */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">15:45 - 16:00</td>
                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold border border-gray-300">2025 Most Innovative EdTech Teacher Award & Closing Remarks – Day 1</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">
                      <strong>H.E. Kim Sethany</strong>, Permanent Secretary of Statee, MoEYS
                    </td>
                  </tr>
                  
                  {/* End of Day 1 */}
                  <tr className="bg-red-200">
                    <td className="px-4 py-3 text-sm font-bold text-gray-800 border border-gray-300">16:00 - 17:00</td>
                    <td className="px-4 py-3 text-sm font-bold text-gray-800 border border-gray-300">Break Time & EdTech Exhibition – End of Day 1</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'day2':
        return (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Day 2 Schedule Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border border-gray-300">Time</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border border-gray-300">Agenda</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border border-gray-300">Remark</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Registration */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">7:00 - 8:20</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">Registration & EdTech Exhibition</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">EdTech Cambodia</td>
                  </tr>
                  
                  {/* Day 1 Recap */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">8:20 - 8:30</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">Summit Day 1 - Recap</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">
                      <strong>Dr. Chin Sam Ath</strong>, Deputy Director, DoPE, MoEYS
                    </td>
                  </tr>
                  
                  {/* Track 3 Header */}
                  <tr className="bg-gray-200">
                    <td className="px-4 py-3 text-sm font-bold text-gray-800 border border-gray-300" colSpan="3">
                      Track 3 | Navigating EdTech for Education and Innovation
                    </td>
                  </tr>
                  
                  {/* The Next Frontier Session */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">8:30 - 9:50</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">
                      <div className="space-y-2">
                        <div className="font-semibold">The Next Frontier of Education: A Sharing and Interacting Session on AI, AR/VR, and Robotics in Education</div>
                        <div className="space-y-1 text-sm mt-3">
                          <div>1. Interactive Session on EdTech experiments, Young Tech Leader</div>
                          <div>2. Presentation 1: <strong>Powering the Future of Learning</strong>, by Bryan Gwan, Country Business Manager, SEMC, HP & ECI</div>
                          <div>3. Presentation 2: <strong>Financial Literacy in Digital Era</strong>, by Mrs. Chan Serey Reaksmey, Canadia Bank</div>
                          <div>4. Presentation 3: <strong>Education Broadcasting Cambodia</strong>, EBC Cambodia by Mr. Sinh Namneng, Deputy Director</div>
                          <div>5. Presentation 4: <strong>SALA Digital</strong>, DoT, MoEYS</div>
                          <div>6. Presentation 5: <strong>Empowering the Next Generation for the Future with AI Fundamental</strong>, Director of Above and Beyond Company, EVCAST, Korea</div>
                          <div>7. Presentation 6: <strong>The New Frontier of Education: AI for Learning</strong> by Mr. Maxime Pourrat, Head of APAC, Norway</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">
                      Facilitated by: Ms. Young Tech Leader
                    </td>
                  </tr>
                  
                  {/* Break Time */}
                  <tr className="bg-red-200">
                    <td className="px-4 py-3 text-sm font-bold text-gray-800 border border-gray-300">9:50 - 10:00</td>
                    <td className="px-4 py-3 text-sm font-bold text-gray-800 border border-gray-300">Break Time & EdTech Exhibition</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">-</td>
                  </tr>
                  
                  {/* Panel Discussion 3 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">10:00 - 11:30</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">
                      <div className="space-y-2">
                        <div className="font-semibold">Panel Discussion 3 | EdTech and Digital Ecosystem</div>
                        <div className="text-sm">Triggering Presentation: <strong>"EdTech in Cambodia: A Snapshot of Current Adoption and Opportunities"</strong></div>
                        <div className="text-sm">Presented by: <strong>Ms. Hasni Mztari</strong>, Asia Lead, EdTech Hub</div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">
                      <div className="space-y-1">
                        <div><strong>Moderator: Ms. Phoury Bun</strong>, Research Fellow, Center for Educational Research and Innovation (CERI), CDRI</div>
                        <div className="mt-2 font-semibold text-gray-700">Panellists:</div>
                        <div>1. <strong>H.E. Dr. Hul Siengheng</strong>, Under Secretary of State, Ministry of Industry, Science, Technology and Innovation</div>
                        <div>2. <strong>Dr. CHHUM Sophea</strong>, Senior ICT Expert, Ministry of Post and Telecommunications</div>
                        <div>3. <strong>Dr. Srun Sovila</strong>, Director of The National Incubation Center of Cambodia</div>
                        <div>4. <strong>Mr. Michael Michaelis</strong>, Founder and Managing Director, EdTech Asia Singapore</div>
                        <div>5. <strong>Dr. Siem Reionleak</strong>, Dean of Faculty of Digital Economy, National University of Management</div>
                      </div>
                    </td>
                  </tr>
                  
                  {/* Break Time */}
                  <tr className="bg-red-200">
                    <td className="px-4 py-3 text-sm font-bold text-gray-800 border border-gray-300">11:30 - 14:00</td>
                    <td className="px-4 py-3 text-sm font-bold text-gray-800 border border-gray-300">Break Time & EdTech Exhibition</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">-</td>
                  </tr>
                  
                  {/* Track 4 Header */}
                  <tr className="bg-gray-200">
                    <td className="px-4 py-3 text-sm font-bold text-gray-800 border border-gray-300" colSpan="3">
                      Track 4 | Beyond the Screen: Safeguarding Children in the Digital Era
                    </td>
                  </tr>
                  
                  {/* Panel Discussion 4 */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">14:00 - 15:30</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">
                      <div className="space-y-2">
                        <div className="font-semibold">Panel Discussion 4 | Ethical Considerations in EdTech and Digital Era</div>
                        <div className="text-sm">Triggering Presentation: <strong>"Ethical Generative AI Application in Education"</strong></div>
                        <div className="text-sm">Presented by: <strong>Mr. Zu Xian Lee (Anders)</strong>, STEPCam Programme Manager, UNESCO Representative</div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">
                      <div className="space-y-1">
                        <div><strong>Moderator: H.E. Sroy Socheath</strong>, Director General of Directorate General of Youth, Ministry of Education, Youth and Sport</div>
                        <div className="mt-2 font-semibold text-gray-700">Panellists:</div>
                        <div>1. <strong>H.E. Nhean Socheata</strong>, Director General, General Directorate of Social Development, Ministry of Women Affairs</div>
                        <div>2. <strong>Mrs. Kalyan ENG</strong>, Child Protection Officer, UNICEF</div>
                        <div>3. <strong>Ms. Im Sreypha</strong>, Program Coordinator of Swiss Safe, ChildFund Cambodia</div>
                        <div>4. <strong>Mr. Zu Xian Lee (Anders)</strong>, STEPCam Programme Manager, UNESCO</div>
                        <div>5. <strong>Ms. Kao Menghorng</strong>, Young Tech Leader, Student at CamTech University majoring in Data Science and AI Engineering</div>
                      </div>
                    </td>
                  </tr>
                  
                  {/* Recap */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">15:30 - 15:40</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">Recap of the Summit</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">
                      <strong>H.E. Dr. Bo Chankoulika</strong><br />
                      Under Secretary of State, MoEYS
                    </td>
                  </tr>
                  
                  {/* Closing Ceremony */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">15:40 - 16:10</td>
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-300">
                      <div className="space-y-2">
                        <div className="font-semibold">Closing Ceremony</div>
                        <div className="space-y-1 text-sm mt-2">
                          <div>• Awarding Top 10 Digital Competency Challenge</div>
                          <div>• Awarding Participants who visit the most exhibition booths</div>
                          <div>• Awarding Top 3 Promotional Video Challenge</div>
                          <div>• Closing Remarks</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">
                      <strong>H.E. Kim Sethany</strong>, Permanent Secretary of State MoEYS
                    </td>
                  </tr>
                  
                  {/* End of Day 2 */}
                  <tr className="bg-red-200">
                    <td className="px-4 py-3 text-sm font-bold text-gray-800 border border-gray-300">16:10 - 17:00</td>
                    <td className="px-4 py-3 text-sm font-bold text-gray-800 border border-gray-300">Break Time & EdTech Exhibition – End of Day 2</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-300">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'speakers': {
        // Speaker data array for better maintainability
        const speakers = [
          {
            id: 1,
            image: "speaker1.png",
            name: "H.E. Dr. Hang Chuon Naron",
            title: "Deputy Prime Minister, Minister of MoEYS"
          },
          {
            id: 2,
            image: "speaker2.png",
            name: "H.E. Kim Sethany",
            title: "Permanent Secretary of State, MoEYS"
          },
          {
            id: 3,
            image: "speaker3.png",
            name: "Mr. Simon Perkins",
            title: "ICT Division CEO, Cellcard"
          },
          {
            id: 4,
            image: "speaker4.png",
            name: "Dr. Anirban Chatterjee",
            title: "Deputy Representative, UNICEF Cambodia"
          },
          {
            id: 5,
            image: "speaker5.png",
            name: "Ms. Moonjung Choi",
            title: "Country Director | KOICA"
          },
          {
            id: 6,
            image: "speaker6.png",
            name: "H.E. Dr. Bo Chankoulika",
            title: "Under Secretary of State, MoEYS"
          },
          {
            id: 7,
            image: "speaker7.png",
            name: "Dr. Eng Netra",
            title: "Executive Director, Cambodia Development Resource Institute, CDRI"
          },
          {
            id: 8,
            image: "speaker8.png",
            name: "Dr. Chin Sam Ath",
            title: "Deputy Director, Department of Policy, MoEYS"
          },
          {
            id: 9,
            image: "speaker9.png",
            name: "Mr. Im Chantola",
            title: "Lead, Strategy and Partnership, Cellcard"
          },
          {
            id: 10,
            image: "speaker10.png",
            name: "Mrs. Chan Serey Reaksmey",
            title: "Canadia Bank"
          },
          {
            id: 11,
            image: "speaker11.png",
            name: "Mr. Sinh Naimheng",
            title: "Deputy Director of Educational Broadcasting Cambodia"
          },
          {
            id: 12,
            image: "speaker12.png",
            name: "លោក ម៉ាច សុខអាង",
            title: "មន្ត្រី នាយកដ្ឋានបរិវត្តកម្មឌីជីថលក្រសួងអប់រំ យុវជន និងកីឡា"
          },
          {
            id: 13,
            image: "speaker13.png",
            name: "លោក អ៊ុក សម្ផស្ស",
            title: "ប្រធានការិយាល័យ នាយកដ្ឋានបរិវត្តកម្មឌីជីថលក្រសួងអប់រំ យុវជន និងកីឡា"
          },
          {
            id: 14,
            image: "speaker14.png",
            name: "Mr. Kim Jungron",
            title: "Director, Above and Beyond"
          },
          {
            id: 15,
            image: "speaker15.png",
            name: "Mr. Maxime Pourrat",
            title: "Head of APAC, Pickatale"
          }
        ];

        return (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {speakers.map((speaker) => (
              <div key={speaker.id} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-red-500 to-pink-600 p-1">
                    <img 
                      src={`/src/assets/images/edtech-2025/speaker-photo/${speaker.image}`}
                      alt={speaker.name}
                      className="w-full h-full rounded-full object-cover bg-white"
                    />
                  </div>
                </div>
                <h4 className="font-semibold text-sm text-gray-900 mb-1">{speaker.name}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{speaker.title}</p>
              </div>
            ))}
          </div>
        );
      }

      case 'panel': {
        // Panel discussion images - one per row, simple display
        const panelImages = [
          "discuss1.png",
          "discuss2.png", 
          "discuss3.png",
          "discuss4.png",
          "discuss5.png",
          "discuss6.png",
          "discuss7.png",
          "discuss8.png"
        ];

        return (
          <div className="space-y-6 max-w-4xl mx-auto">
            {panelImages.map((image, index) => (
              <div key={index} className="w-full">
                <img 
                  src={`/src/assets/images/edtech-2025/speaker-photo/${image}`}
                  alt={`Panel Discussion ${index + 1}`}
                  className="w-full h-auto object-cover rounded-xl shadow-lg"
                />
              </div>
            ))}
          </div>
        );
      }

      default:
        return null;
    }
  };

  return (
    <>
      {/* Simple Hero Section */}
      <section className="relative min-h-[50vh] bg-transparent text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-16 h-16 border-2 border-yellow-400 rounded-full"></div>
          <div className="absolute top-20 right-20 w-12 h-12 border-2 border-pink-400 rounded-lg rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-14 h-14 border-2 border-green-400 rounded-full"></div>
          <div className="absolute bottom-32 right-32 w-10 h-10 border-2 border-purple-400 rounded-lg"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-8 py-16 md:py-20">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontWeight: '800' }}>
              របៀបវារៈ
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-widest">
              Agenda
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('day1')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'day1'
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-rd hover:bg-red-50 hover:text-red-600 shadow-md'
              }`}
            >
              DAY 1
            </button>
            <button
              onClick={() => setActiveTab('day2')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'day2'
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 shadow-md'
              }`}
            >
              DAY 2
            </button>
            <button
              onClick={() => setActiveTab('speakers')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'speakers'
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 shadow-md'
              }`}
            >
              SPEAKERS
            </button>
            <button
              onClick={() => setActiveTab('panel')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'panel'
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 shadow-md'
              }`}
            >
              PANEL DISCUSSION
            </button>
          </div>

          {/* Tab Content */}
          <div className="transition-all duration-300">
            {renderTabContent()}
          </div>
        </div>
      </section>
    </>
  );
};

export default EdTech2025Agenda;