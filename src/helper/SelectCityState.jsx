import React, { useState, useCallback } from 'react';

export const SelectCityState = ({ onSave }) => {
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedCities, setSelectedCities] = useState({});
  const [expandedState, setExpandedState] = useState(null);

  const states = [
    { id: '1', name: 'Andaman and Nico.In.' },
    { id: '2', name: 'Andhra Pradesh' },
    { id: '3', name: 'Arunachal Pradesh' },
    { id: '4', name: 'Assam' },
    { id: '5', name: 'Bihar' },
    { id: '6', name: 'Chandigarh' },
    { id: '7', name: 'Chattisgarh' },
    { id: '8', name: 'Dadra and Nagar Haveli' },
    { id: '9', name: 'Daman and Diu' },
    { id: '10', name: 'Delhi' },
    { id: '11', name: 'Goa' },
    { id: '12', name: 'Gujarat' },
    { id: '13', name: 'Haryana' },
    { id: '14', name: 'Himachal Pradesh' },
    { id: '15', name: 'Jammu and Kashmir' },
    { id: '16', name: 'Jharkhand' },
    { id: '17', name: 'Karnataka' },
    { id: '18', name: 'Kerala' },
    { id: '19', name: 'Lakshadweep' },
    { id: '20', name: 'Madhya Pradesh' },
    { id: '21', name: 'Maharashtra' },
    { id: '22', name: 'Manipur' },
    { id: '23', name: 'Megalaya' },
    { id: '24', name: 'Mizoram' },
    { id: '25', name: 'Nagaland' },
    { id: '26', name: 'Odisha' },
    { id: '27', name: 'Pondicherry' },
    { id: '28', name: 'Punjab' },
    { id: '29', name: 'Rajasthan' },
    { id: '30', name: 'Sikkim' },
    { id: '31', name: 'Tamil Nadu' },
    { id: '32', name: 'Telangana' },
    { id: '33', name: 'Tripura' },
    { id: '34', name: 'Uttar Pradesh' },
    { id: '35', name: 'Uttarakhand' },
    { id: '36', name: 'West Bengal' },
    // Add more states as needed
  ];

  const citiesData = {
    '1': ['Nicobar', 'North & Middle Andaman', 'South Andaman'],
    '2': ['Adoni', 'Amalapuram', 'Anakapalle', 'Anantapur', 'Avanigadda', 'Bapatla', 'Bhadrachalam', 'Bheemunipatnam', 'Bhimavaram', 'Bhongir', 'Bobbili', 'Chilakaluripet', 'Chirala', 'Chittoor', 'Dharmavaram', 'East Godavari', 'Eluru', 'Gooty', 'Gudivada', 'Gudur', 'Guntakal', 'Guntur', 'Hindupur', 'Jaggaiahpet', 'Jaggaiahpet', 'Jammalamadugu', 'Kadapa', 'Kadiri', 'Kakinada', 'Kandukur', 'Karim Nagar', 'Kavali', 'Kovvur', 'Krishna', 'Kurnool', 'Macherla', 'Machilipatnam', 'Madanapalle', 'Mandapeta', 'Markapur', 'Nagari', 'Naidupet', 'Nandyal', 'Narasapuram', 'Narasaraopet', 'Narsipatnam', 'Nellore', 'Nidadavole', 'Nuzvid', 'Ongole', 'Palacole', 'Palakol', 'Palasa Kasibugga', 'Parvathipuram', 'Pedana', 'Peddapuram', 'Pithapuram', 'Ponnur', 'Prakasam', 'Proddatur', 'Punganur', 'Rajahmundry', 'Rajam', 'Rajampet', 'Ramachandrapuram', 'Rayachoti', 'Rayadurg', 'Renigunta', 'Repalle', 'Salur', 'Samalkot', 'Sattenapalle', 'Srikakulam', 'Srikalahasti', 'Srisailam', 'Sullurpeta', 'Tadepalligudem', 'Tadpatri', 'Tanuku', 'Tenali', 'Tirupati', 'Tiruvuru', 'Tuni', 'Uravakonda', 'Venkatagiri', 'Vijayawada', 'Vinukonda', 'Visakhapatnam', 'Vizianagaram', 'Warangal', 'West Godavari', 'Yanam', 'Yemmiganur', 'Yerraguntla'],
    '3': ['Changlang', 'Dibang Valley', 'East Kameng', 'East Siang', 'Kurung Kumey', 'Lohit', 'Lower Dibang Valley', 'Lower Subansiri', 'Naharlagun', 'Papum Pare', 'Pasighat', 'Tawang', 'Tirap', 'Upper Dibang Valley', 'Upper Siang', 'Upper Subansiri', 'West Kameng', 'West Siang'],
    '4': ['Baksa', 'Barpeta', 'Bongaigaon', 'Bongaigaon City', 'Cachar', 'Darrang', 'Dhemaji', 'Dhubri', 'Dibrugarh', 'Dima Hasso', 'Diphu', 'Goalpara', 'Golaghat', 'Guwahati', 'Hailakandi', 'Jorhat', 'Kamrup', 'Kamrup Metropolitan', 'Karbi Anglong', 'Karimganj', 'Kokrajhar', 'Lakhimpur', 'Lanka', 'Lumding', 'Mangaldoi', 'Mankachar', 'Margherita', 'Mariani', 'Marigaon', 'Nagaon', 'Nalbari', 'North Lakhimpur', 'Rangia', 'Sibsagar', 'Silapathar', 'Silchar', 'Sonapur', 'Sonitpur', 'Tezpur', 'Tinsukia', 'Udalguri'],
    '5': ['Araria', 'Arrah', 'Arwal', 'Asarganj', 'Auranagabad', 'Aurangabad', 'Bagaha', 'Banka', 'Barh', 'Begusarai', 'Bettiah', 'Bhaburban', 'Bhagalpur', 'Bhojpur', 'Buxar', 'Chhapra', 'Darbhanga', 'Dehri-On-Sone', 'Deoghar', 'Dumraon', 'East Champaran', 'Forbesganj', 'Gaya', 'Gopalganj', 'Hajipur', 'Jamalpur', 'Jamui', 'Jehanabad', 'Kaimur Bhabua', 'Katihar', 'Khagaria', 'Kishanganj', 'Lakhisarai', 'Lalganj', 'Madhepura', 'Madhubani', 'Mahnar Bazar', 'Makhdumpur', 'Maner', 'Manihari', 'Marhaura', 'Masaurhi', 'Mirganj', 'Mokameh', 'Motihari', 'Motipur', 'Munger', 'Murliganj', 'Muzaffarpur', 'Nalanda', 'Narkatiaganj', 'Naugachhia', 'Nawada', 'Patna', 'Piro', 'Purnia', 'Rafiganj', 'Rajgir', 'Raxaul Bazar', 'Revelganj', 'Rohtas', 'Rosera', 'Saharsa', 'Samastipur', 'Saran', 'Sasaram', 'Sheikhpura', 'Sheohar', 'Sherghati', 'Silao', 'Sitamarhi', 'Siwan', 'Sonepur', 'Sugauli', 'Sultanganj', 'Supaul', 'Vaishali', 'Warisaliganj', 'West Champaran'],
    '6': ['Chandigarh'],
    '7': ['Balod', 'Balod Bazar', 'Balrampur', 'Bastar', 'Bemetara', 'Bijapur', 'Bilaspur', 'Bilaspurcgh', 'Dantewada', 'Dhamtari', 'Durg', 'Gariaband', 'Jagdalpur', 'Janjgirchampa', 'Jaspur', 'Kanker', 'Kawardha', 'Kondagaon', 'Korba', 'Koriya', 'Mahasamund', 'Makdi', 'Mungeli', 'Narayanpur', 'Raigarh', 'Raipur', 'Rajnandgaon', 'Sukma', 'Surajpur', 'Surguja', 'Ambikapur', 'Tilda Newra'],
    '8': ['Dadra Nagar Haveli', 'Silvassa'],
    '9': ['Daman', 'Diu'],
    '10': ['Central Delhi', 'Delhi', 'East Delhi', 'New Delhi', 'North Delhi', 'North East Delhi', 'North West Delhi', 'Shahdara', 'South Delhi', 'South West Delhi', 'West Delhi'],
    '11': ['Mapusa', 'Margao', 'Marmagao', 'North Goa', 'Panaji', 'South Goa'],
    '12': ['Adalaj', 'Ahmedabad', 'Ahmedabad City', 'Amreli', 'Anand', 'Anjar', 'Ankleshwar', 'Aravalli', 'Banaskantha', 'Bharuch', 'Bhavnagar', 'Bhuj', 'Botab', 'Chhota Udepur', 'Chhotaudepur', 'Dahod', 'Dangs', 'Deesa', 'Devbhoomi Dwerka', 'Dhoraji', 'Gandhi Nagar', 'Gandhinagar', 'Gir Somnath', 'Godhra', 'Jamnagar', 'Junagadh', 'Kachchh', 'Kadi', 'Kapadvanj', 'Keshod', 'Khambhat', 'Kheda', 'Lathi', 'Limbdi', 'Lunawada', 'Mahemdabad', 'Mahesana', 'Mahisagar', 'Mahuva', 'Manavadar', 'Mandvi', 'Mangrol', 'Modasa', 'Morbi', 'Morvi', 'Nadiad', 'Narmada', 'Navsari', 'Padra', 'Palanpur', 'Palitana', 'Panch Mahals', 'Pardi', 'Patan', 'Petlad', 'Porbandar', 'Radhanpur', 'Rajkot', 'Rajpipla', 'Rajula', 'Ranavav', 'Rapar', 'Sabarkantha', 'Salaya', 'Sanand', 'Savarkundla', 'Sidhpur', 'Sihor', 'Songadh', 'Surat', 'Surendra Nagar', 'Talaja', 'Tapi', 'Thangadh', 'Tharad', 'Umbergaon', 'Umreth', 'Unjha', 'Upleta', 'Vadnagar', 'Vadodara', 'Valsad', 'Vapi', 'Veraval', 'Vijapur', 'Viramgam', 'Visnagar', 'Vyara', 'Wadhwan', 'Wankaner'],
    '13': ['Ambala', 'Ambala City', 'Bahadurgarh', 'Bhiwani', 'Charkhi Dadri', 'Faridabad', 'Fatehabad', 'Gohana', 'Gurgaon', 'Hansi', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'Ladwa', 'Mahendragarh', 'Mandi Dabwali', 'Mewat', 'Narnaul', 'Narwana', 'Palwal', 'Panchkula', 'Panipat', 'Pehowa', 'Pinjore', 'Rania', 'Ratia', 'Rewari', 'Rohtak', 'Safidon', 'Samalkha', 'Sarsod', 'Shahbad', 'Sirsa', 'Sohna', 'Sonipat', 'Taraori', 'Thanesar', 'Tohana', 'Yamunanagar'],
    '14': ['Bilaspur (Hp)', 'Bilaspur Hp', 'Chamba', 'Hamirpur(Hp)', 'Hamirpurhp', 'Kangra', 'Kinnaur', 'Kullu', 'Lahul Spiti', 'Mandi', 'Nahan', 'Palampur', 'Shimla', 'Sirmaur', 'Solan', 'Sundarnagar', 'Una'],
    '15': ['Anantnag', 'Bandipur', 'Baramula', 'Baramulla', 'Budgam', 'Doda', 'Ganderbal', 'Jammu', 'Kargil', 'Kathua', 'Kathurban Agglomeration', 'Kulgam', 'Kupwara', 'Leh', 'Poonch', 'Pulwama', 'Punch', 'Rajauri', 'Ramban', 'Reasi', 'Samba', 'Shopian', 'Sopore', 'Srinagar', 'Udhampur'],
    '16': ['Adityapur', 'Bokaro', 'Bokaro Steel City', 'Chaibasa', 'Chatra', 'Chirkunda', 'Dhanbad', 'Dumka', 'East Singhbhum', 'Garhwa', 'Giridh', 'Giridih', 'Godda', 'Gumia', 'Gumla', 'Hazaribag', 'Hazaribagh', 'Jamshedpur', 'Jamtara', 'Jhumri Tilaiya', 'Khunti', 'Koderma', 'Latehar', 'Lohardaga', 'Madhupur', 'Medininagar (Daltonganj)', 'Mihijam', 'Musabani', 'Pakaur', 'Pakur', 'Palamau', 'Patratu', 'Phusro', 'Ramgarh', 'Ranchi', 'Sahibganj', 'Saunda', 'Seraikelakharsawan', 'Simdega', 'Tenu Dam-Cum-Kathhara', 'West Singhbhum'],
    '17': ['Adyar', 'Afzalpur', 'Arsikere', 'Athani', 'Athni', 'Bagalkot', 'Bailhongal', 'Ballari', 'Bangalore', 'Belagavi', 'Belgaum', 'Bellary', 'Bengaluru', 'Bengaluru Rural', 'Bidar', 'Bijapur', 'Bijapur(Kar)', 'Chamarajanagar', 'Chamrajnagar', 'Chickmagalur', 'Chikkaballapur', 'Chikkamagaluru', 'Chitradurga', 'Dakshina Kannada', 'Davanagere', 'Davangere', 'Dharwad', 'Gadag', 'Gokak', 'Gulbarga', 'Hanagodu', 'Hassan', 'Haveri', 'Hubballi', 'Hubli-Dharwad', 'Hunsur', 'Jamkhandi', 'Joida', 'Kalaburagi', 'Kalghatgi', 'Karwar', 'Kodagu', 'Kolar', 'Kollegal', 'Koppal', 'Kundgol', 'Lakshmeshwar', 'Lingsugur', 'Maddur', 'Madhugiri', 'Madikeri', 'Magadi', 'Mahalingapura', 'Malavalli', 'Malur', 'Mandya', 'Mangaluru', 'Manvi', 'Mudabidri', 'Mudalagi', 'Muddebihal', 'Mudhol', 'Mulbagal', 'Mundargi', 'Mysore', 'Mysuru', 'Nanjangud', 'Nargund', 'Navalgund', 'Nelamangala', 'Pavagada', 'Piriyapatna', 'Puttur', 'Raayachuru', 'Rabkavi Banhatti', 'Raichur', 'Ramanagar', 'Ramanagara', 'Ramanagaram', 'Ramdurg', 'Ranebennuru', 'Ranibennur', 'Robertson Pet', 'Ron', 'Sadalagi', 'Sagar', 'Sagara', 'Sakaleshapura', 'Sanduru', 'Sankeshwara', 'Saraswathipuram', 'Saundatti-Yellamma', 'Savanur', 'Sedam', 'Shahabad', 'Shahpur', 'Shiggaon', 'Shikaripur', 'Shivamogga', 'Shrirangapattana', 'Siddapur', 'Sidlaghatta', 'Sindagi', 'Sindhagi', 'Sindhnur', 'Sira', 'Sirsi', 'Siruguppa', 'Srinivaspur', 'Surapura', 'Talikota', 'Tarikere', 'Tekkalakote', 'Terdal', 'Tiptur', 'Tumakuru', 'Tumkur', 'Udupi', 'Uttara Kannada', 'Vijayapura', 'Wadi', 'Yadgir'],
    '18': ['Adoor', 'Alappuzha', 'Attingal', 'Chalakudy', 'Changanassery', 'Cherthala', 'Chittur-Thathamangalam', 'Ernakulam', 'Guruvayoor', 'Idukki', 'Kanhangad', 'Kannur', 'Kasaragod', 'Kasargod', 'Kayamkulam', 'Kodungallur', 'Kollam', 'Kottayam', 'Koyilandy', 'Kozhikode', 'Kunnamkulam', 'Mahe', 'Malappuram', 'Malappurm', 'Mattannur', 'Mavelikkara', 'Mavoor', 'Muvattupuzha', 'Nedumangad', 'Neyyattinkara', 'Nilambur', 'Ottappalam', 'Palai', 'Palakkad', 'Panamattom', 'Panniyannur', 'Pappinisseri', 'Paravoor', 'Pathanamthitta', 'Peringathur', 'Perinthalmanna', 'Perumbavoor', 'Ponnani', 'Punalur', 'Puthuppally', 'Shoranur', 'Taliparamba', 'Thalassery', 'Thiruvalla', 'Thiruvananthapuram', 'Thodupuzha', 'Thrissur', 'Tirur', 'Vaikom', 'Varkala', 'Vatakara', 'Wayanad'],
    '19': ['Kochi', 'Lakshadweep'],
    '20': ['Agar Malwa', 'Alirajpur', 'Anuppur', 'Ashok Nagar', 'Balaghat', 'Barwani', 'Betul', 'Bhind', 'Bhopal', 'Burhanpur', 'Chhatarpur', 'Chhindwara', 'Damoh', 'Datia', 'Dewas', 'Dhar', 'Dindori', 'Ganjbasoda', 'Guna', 'Gwalior', 'Harda', 'Hoshangabad', 'Indore', 'Itarsi', 'Jabalpur', 'Jhabua', 'Katni', 'Khandwa', 'Khargone', 'Lahar', 'Maharajpur', 'Mahidpur', 'Maihar', 'Malaj Khand', 'Manasa', 'Manawar', 'Mandideep', 'Mandla', 'Mandsaur', 'Mauganj', 'Mhow Cantonment', 'Mhowgaon', 'Morena', 'Multai', 'Mundi', 'Murwara (Katni)', 'Nagda', 'Nainpur', 'Narsinghgarh', 'Narsinghpur', 'Neemuch', 'Nepanagar', 'Niwari', 'Nowgong', 'Nowrozabad (Khodargama)', 'Pachore', 'Panagar', 'Pandhurna', 'Panna', 'Pasan', 'Pipariya', 'Pithampur', 'Porsa', 'Prithvipur', 'Raghogarh-Vijaypur', 'Rahatgarh', 'Raisen', 'Rajgarh', 'Ratlam', 'Rau', 'Rehli', 'Rewa', 'Sabalgarh', 'Sanawad', 'Sarangpur', 'Sarni', 'Satna', 'Sausar', 'Sehore', 'Sendhwa', 'Seoni', 'Seoni-Malwa', 'Shahdol', 'Shajapur', 'Shamgarh', 'Sheopur', 'Shivpuri', 'Shujalpur', 'Sidhi', 'Sihora', 'Singrauli', 'Sironj', 'Sohagpur', 'Tarana', 'Tikamgarh', 'Ujjain', 'Umaria', 'Vidisha', 'Vijaypur', 'Wara Seoni'],
    '21': ['Achalpur', 'Ahmed Nagar', 'Ahmednagar', 'Akola', 'Akot', 'Amalner', 'Ambejogai', 'Amravati', 'Anjangaon', 'Arvi', 'Beed', 'Bhandara', 'Bhiwandi', 'Bhusawal', 'Buldhana', 'Chandrapur', 'Dhule', 'Gadchiroli', 'Gondia', 'Hingoli', 'Ichalkaranji', 'Jalgaon', 'Jalgoan', 'Jalna', 'Kalyan-Dombivali', 'Karjat', 'Kolhapur', 'Latur', 'Loha', 'Lonar', 'Lonavla', 'Mahad', 'Malegaon', 'Malkapur', 'Mangalvedhe', 'Mangrulpir', 'Manjlegaon', 'Manmad', 'Manwath', 'Mehkar', 'Mhaswad', 'Mira-Bhayandar', 'Miraj', 'Morshi', 'Mukhed', 'Mul', 'Mumbai', 'Mumbai Suburban', 'Murtijapur', 'Nagpur', 'Nanded', 'Nanded-Waghala', 'Nandgaon', 'Nandura', 'Nandurbar', 'Narkhed', 'Nashik', 'Nawapur', 'Nilanga', 'Osmanabad', 'Ozar', 'Pachora', 'Paithan', 'Palghar', 'Pandharkaoda', 'Pandharpur', 'Panvel', 'Parbhani', 'Parli', 'Partur', 'Pathardi', 'Pathri', 'Patur', 'Pauni', 'Pen', 'Phaltan', 'Pulgaon', 'Pune', 'Purna', 'Pusad', 'Rahuri', 'Raigarh(Mh)', 'Rajura', 'Ramtek', 'Ratnagiri', 'Raver', 'Risod', 'Sailu', 'Sangamner', 'Sangli', 'Sangole', 'Sasvad', 'Satana', 'Satara', 'Savner', 'Sawantwadi', 'Shahade', 'Shegaon', 'Shendurjana', 'Shirdi', 'Shirpur-Warwade', 'Shirur', 'Shrigonda', 'Shrirampur', 'Sillod', 'Sindhudurg', 'Sinnar', 'Solapur', 'Soyagaon', 'Talegaon Dabhade', 'Talode', 'Tasgaon', 'Thane', 'Tirora', 'Tuljapur', 'Tumsar', 'Uchgaon', 'Udgir', 'Umarga', 'Umarkhed', 'Umred', 'Uran', 'Uran Islampur', 'Vadgaon Kasba', 'Vaijapur', 'Vasai-Virar', 'Vita', 'Wadgaon Road', 'Wai', 'Wani', 'Wardha', 'Warora', 'Warud', 'Washim', 'Yavatmal', 'Yawal', 'Yevla'],
    '22': ['Bishnupur', 'Chandel', 'Churachandpur', 'Imphal', 'Imphal East', 'Imphal West', 'Jiribam', 'Lilong', 'Mayang Imphal', 'Senapati', 'Tamenglong', 'Tengnoupal', 'Thanlon', 'Thoubal', 'Ukhrul'],
    '23': ['East Garo Hills', 'East Jaintia Hills', 'East Khasi Hills', 'Jaintia Hills', 'Nongstoin', 'Ri Bhoi', 'Shillong', 'South Garo Hills', 'South West Khasi Hills', 'Tura', 'West Garo Hills', 'West Jaintia Hills', 'West Khasi Hills'],
    '24': ['Aizawal', 'Champhai', 'Kolasib', 'Lawngtlai', 'Lunglei', 'Mamit', 'Mammit', 'Saiha', 'Serchhip'],
    '25': ['Dimapur', 'Kiphire', 'Kohima', 'Longleng', 'Mokokchung', 'Mon', 'Peren', 'Phek', 'Tuensang', 'Wokha', 'Zunheboto', 'Zunhebotto'],
    '26': ['Angul', 'Balangir', 'Balasore', 'Baleshwar Town', 'Baleswar', 'Barbil', 'Bargarh', 'Baripada Town', 'Bhadrak', 'Bhawanipatna', 'Bhubaneswar', 'Boudh', 'Brahmapur', 'Byasanagar', 'Cuttack', 'Debagarh', 'Dhenkanal', 'Gajapati', 'Ganjam', 'Jagatsinghapur', 'Jajapur', 'Jatani', 'Jharsuguda', 'Kalahandi', 'Kandhamal', 'Kendrapara', 'Kendujhar', 'Khorda', 'Koraput', 'Malkangiri', 'Mayurbhanj', 'Nabarangapur', 'Nayagarh', 'Nuapada', 'Paradip', 'Parlakhemundi', 'Pattamundai', 'Phulabani', 'Puri', 'Rairangpur', 'Rajagangapur', 'Raurkela', 'Rayagada', 'Sambalpur', 'Soro', 'Sunabeda', 'Sundargarh', 'Sundergarh', 'Talcher', 'Tarbha', 'Titlagarh'],
    '27': ['Pondicherry'],
    '28': ['Amritsar', 'Barnala', 'Batala', 'Bathinda', 'Dhuri', 'Faridkot', 'Fatehgarh Sahib', 'Fazilka', 'Ferozepur', 'Firozpur', 'Firozpur Cantt.', 'Gobindgarh', 'Gurdaspur', 'Hoshiarpur', 'Jagraon', 'Jalandhar', 'Jalandhar Cantt.', 'Kapurthala', 'Khanna', 'Kharar', 'Kot Kapura', 'Longowal', 'Ludhiana', 'Malerkotla', 'Malout', 'Mansa', 'Moga', 'Mohali', 'Morinda, India', 'Mukerian', 'Muktsar', 'Nabha', 'Nakodar', 'Nangal', 'Nawanshahr', 'Pathankot', 'Patiala', 'Patti', 'Pattran', 'Phagwara', 'Phillaur', 'Qadian', 'Raikot', 'Rajpura', 'Rampura Phul', 'Ropar', 'Rupnagar', 'Samana', 'Sangrur', 'Sirhind Fatehgarh Sahib', 'Sujanpur', 'Sunam', 'Talwara', 'Tarn Taran', 'Urmar Tanda', 'Zira', 'Zirakpur'],
    '29': ['Ajmer', 'Alwar', 'Banswara', 'Baran', 'Barmer', 'Bharatpur', 'Bhilwara', 'Bikaner', 'Bundi', 'Chittorgarh', 'Churu', 'Dausa', 'Dholpur', 'Dungarpur', 'Hanumangarh', 'Jaipur', 'Jaisalmer', 'Jalor', 'Jhalawar', 'Jhujhunu', 'Jodhpur', 'Karauli', 'Kota', 'Lachhmangarh', 'Ladnu', 'Lakheri', 'Lalsot', 'Losal', 'Makrana', 'Malpura', 'Mandalgarh', 'Mandawa', 'Merta City', 'Mount Abu', 'Nadbai', 'Nagar', 'Nagaur', 'Nasirabad', 'Nathdwara', 'Neem-Ka-Thana', 'Nimbahera', 'Nohar', 'Nokha', 'Pali', 'Phalodi', 'Phulera', 'Pilani', 'Pilibanga', 'Pindwara', 'Pipar City', 'Prantij', 'Pratapghar', 'Raisinghnagar', 'Rajakhera', 'Rajaldesar', 'Rajgarh (Alwar)', 'Rajgarh (Churu)', 'Rajsamand', 'Ramganj Mandi', 'Ramngarh', 'Ratangarh', 'Rawatbhata', 'Rawatsar', 'Reengus', 'Sadri', 'Sadulpur', 'Sadulshahar', 'Sagwara', 'Sambhar', 'Sanchore', 'Sangaria', 'Sardarshahar', 'Sawai Madhopur', 'Shahpura', 'Sheoganj', 'Sikar', 'Sirohi', 'Sojat', 'Sri Ganganagar', 'Sri Madhopur', 'Sriganganagar', 'Sujangarh', 'Sumerpur', 'Suratgarh', 'Takhatgarh', 'Taranagar', 'Todabhim', 'Todaraisingh', 'Tonk', 'Udaipur', 'Udaipurwati', 'Vijainagar'],
    '30': ['East Sikkim', 'North Sikkim', 'South Sikkim', 'West Sikkim'],
    '31': ['Arakkonam', 'Ariyalur', 'Aruppukkottai', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Gobichettipalayam', 'Kancheepuram', 'Kanchipuram', 'Kanyakumari', 'Karaikal', 'Karur', 'Krishnagiri', 'Lalgudi', 'Madurai', 'Manachanallur', 'Nagapattinam', 'Nagercoil', 'Namagiripettai', 'Namakkal', 'Nandivaram-Guduvancheri', 'Nanjikottai', 'Natham', 'Nellikuppam', 'Neyveli (Ts)', 'Nilgiris', 'O\' Valley', 'Oddanchatram', 'P.N.Patti', 'Pacode', 'Padmanabhapuram', 'Palani', 'Palladam', 'Pallapatti', 'Pallikonda', 'Panagudi', 'Panruti', 'Paramakudi', 'Parangipettai', 'Pattukkottai', 'Perambalur', 'Peravurani', 'Periyakulam', 'Periyasemur', 'Pernampattu', 'Pollachi', 'Polur', 'Ponneri', 'Pudukkottai', 'Pudupattinam', 'Puliyankudi', 'Punjaipugalur', 'Rajapalayam', 'Ramanathapuram', 'Rameshwaram', 'Ranipet', 'Rasipuram', 'Salem', 'Sankarankovil', 'Sankari', 'Sathyamangalam', 'Sattur', 'Shenkottai', 'Sholavandan', 'Sholingur', 'Sirkali', 'Sivaganga', 'Sivagiri', 'Sivakasi', 'Srivilliputhur', 'Surandai', 'Suriyampalayam', 'Tenkasi', 'Thammampatti', 'Thanjavur', 'Tharamangalam', 'Tharangambadi', 'Theni', 'Theni Allinagaram', 'Thirumangalam', 'Thirupuvanam', 'Thiruthuraipoondi', 'Thiruvallur', 'Thiruvarur', 'Thuraiyur', 'Tindivanam', 'Tiruchendur', 'Tiruchengode', 'Tiruchirappalli', 'Tirukalukundram', 'Tirukkoyilur', 'Tirunelveli', 'Tirupathur', 'Tiruppur', 'Tiruttani', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Tiruvethipuram', 'Tittakudi', 'Tuticorin', 'Udhagamandalam', 'Udumalaipettai', 'Unnamalaikadai', 'Usilampatti', 'Uthamapalayam', 'Uthiramerur', 'Vadakkuvalliyur', 'Vadalur', 'Vadipatti', 'Valparai', 'Vandavasi', 'Vaniyambadi', 'Vedaranyam', 'Vellakoil', 'Vellore', 'Vikramasingapuram', 'Villupuram', 'Viluppuram', 'Virudhachalam', 'Virudhunagar', 'Viswanatham'],
    '32': ['Adilabad', 'Bellampalle', 'Bhainsa', 'Bhupalpalli', 'Bodhan', 'Farooqnagar', 'Gadwal', 'Hanamkonda', 'Hyderabad', 'Jagtial', 'Jangaon', 'Jayashankar', 'K.V.Rangareddy', 'Kagaznagar', 'Kamareddy', 'Karimnagar', 'Khammam', 'Koratla', 'Kothagudem', 'Kothagudem Colls', 'Kyathampalle', 'Mahabuababad', 'Mahabub Nagar', 'Mahabubabad', 'Mahbubnagar', 'Mancherial', 'Mandamarri', 'Manuguru', 'Medak', 'Miryalaguda', 'Nagar Kurnool', 'Nagarkurnool', 'Nalgonda', 'Narayanpet', 'Nirmal', 'Nizamabad', 'Palwancha', 'Parkal', 'Peddapalli', 'Ramagundam', 'Ranga Reddy', 'Rangareddy', 'Sadasivpet', 'Sangareddy', 'Secunderabad', 'Siddipet', 'Sircilla', 'Stn. Jadcherla', 'Suryapet', 'Tandur', 'Trimulgherry', 'Vikarabad', 'Wanaparthy', 'Warangal Rural', 'Yellandu', 'Zaheerabad'],
    '33': ['Agartala', 'Belonia', 'Dhalai', 'Dharmanagar', 'Gomati', 'Gomti', 'Kailasahar', 'Khowai', 'North Tripura', 'Sepahijala', 'South Tripura', 'West Tripura'],
    '34': ['Achhnera', 'Agra', 'Aligarh', 'Allahabad', 'Ambedkar Nagar', 'Amethi', 'Amroha', 'Auraiya', 'Azamgarh', 'Bagpat', 'Bahraich', 'Ballia', 'Banda', 'Barabanki', 'Bareilly', 'Basti', 'Bijnor', 'Budaun', 'Bulandshahr', 'Chandauli', 'Chandausi', 'Chitrakoot', 'Deoria', 'Etah', 'Etawah', 'Faizabad', 'Farrukhabad', 'Fatehpur', 'Fatehpur Sikri', 'Firozabad', 'Gautam Buddha Nagar', 'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hapur', 'Hardoi', 'Haridwar', 'Hathras', 'Jalaun', 'Jaunpur', 'Jhansi', 'Kalpi', 'Kannauj', 'Kanpur', 'Kanpur Dehat', 'Kanpur Nagar', 'Kanshiram Nagar', 'Kaushambi', 'Khair', 'Kheri', 'Kushinagar', 'Laharpur', 'Lal Gopalganj Nindaura', 'Lalitpur', 'Lar', 'Loni', 'Lucknow', 'Maharajganj', 'Mahoba', 'Mahrajganj', 'Mainpuri', 'Mathura', 'Mau', 'Meerut', 'Mirzapur', 'Modinagar', 'Moradabad', 'Muzaffarnagar', 'Nagina', 'Najibabad', 'Nakur', 'Nanpara', 'Naraura', 'Naugawan Sadat', 'Nautanwa', 'Nawabganj', 'Nehtaur', 'Niwai', 'Noida', 'Noorpur', 'Obra', 'Orai', 'Padrauna', 'Palia Kalan', 'Parasi', 'Phulpur', 'Pihani', 'Pilibhit', 'Pilkhuwa', 'Powayan', 'Pratapgarh', 'Prayagraj Allahabad', 'Pukhrayan', 'Puranpur', 'Purqurban Agglomerationzi', 'Purwa', 'Rae Bareli', 'Raebareli', 'Rampur', 'Rampur Maniharan', 'Rasra', 'Rath', 'Renukoot', 'Reoti', 'Robertsganj', 'Rudauli', 'Sadabad', 'Safipur', 'Saharanpur', 'Sahaspur', 'Sahaswan', 'Sahawar', 'Sahjanwa', 'Saidpur', 'Sambhal', 'Samdhan', 'Samthar', 'Sandi', 'Sandila', 'Sant Kabir Nagar', 'Sant Ravidas Nagar', 'Sardhana', 'Seohara', 'Shahabad, Hardoi', 'Shahabad, Rampur', 'Shahganj', 'Shahjahanpur', 'Shamli', 'Shamsabad, Agra', 'Shamsabad, Farrukhabad', 'Sherkot', 'Shikarpur, Bulandshahr', 'Shikohabad', 'Shishgarh', 'Shrawasti', 'Siana', 'Siddharthnagar', 'Sikanderpur', 'Sikandra Rao', 'Sikandrabad', 'Sirsaganj', 'Sitapur', 'Sonbhadra', 'Soron', 'Sultanpur', 'Surban Agglomerationr', 'Tanda', 'Thakurdwara', 'Thana Bhawan', 'Tilhar', 'Tirwaganj', 'Tulsipur', 'Tundla', 'Ujhani', 'Unnao', 'Utraula', 'Varanasi', 'Vrindavan', 'Warhapur', 'Zaidpur', 'Zamania'],
    '35': ['Almora', 'Bageshwar', 'Chamoli', 'Champawat', 'Dehradun', 'Haldwani-Cum-Kathgodam', 'Hardwar', 'Kashipur', 'Manglaur', 'Mussoorie', 'Nagla', 'Nainital', 'Pauri', 'Pauri Garhwal', 'Pithoragarh', 'Ramnagar', 'Rishikesh', 'Roorkee', 'Rudraprayag', 'Rudrapur', 'Sitarganj', 'Tehri', 'Tehri Garhwal', 'Udham Singh Nagar', 'Uttarkashi'],
    '36': ['Adra', 'Alipurdurban Agglomerationr', 'Arambagh', 'Asansol', 'Baharampur', 'Balurghat', 'Bankura', 'Bardhaman', 'Birbhum', 'Cooch Behar', 'Darjeeling', 'Darjiling', 'East Midnapore', 'English Bazar', 'Gangarampur', 'Habra', 'Hooghly', 'Howrah', 'Hugli-Chinsurah', 'Jalpaiguri', 'Jhargram', 'Kalimpong', 'Kharagpur', 'Kolkata', 'Mainaguri', 'Malda', 'Mathabhanga', 'Medinipur', 'Memari', 'Monoharpur', 'Murshidabad', 'Nabadwip', 'Nadia', 'Naihati', 'North 24 Parganas', 'North Dinajpur', 'Panchla', 'Pandurban Agglomeration', 'Paschim Bardhaman', 'Paschim Punropara', 'Port Blair', 'Purulia', 'Puruliya', 'Raghunathganj', 'Raghunathpur', 'Raiganj', 'Rampurhat', 'Ranaghat', 'Sainthia', 'Santipur', 'Siliguri', 'Sonamukhi', 'South 24 Parganas', 'South Dinajpur', 'Srirampore', 'Suri', 'Taki', 'Tamluk', 'Tarakeswar', 'West Midnapore'],
    // Add cities corresponding to each state
  };

  const handleStateChange = (event) => {
    const stateId = event.target.value;
    const isChecked = event.target.checked;

    setSelectedStates((prev) =>
      isChecked ? [...prev, stateId] : prev.filter((id) => id !== stateId)
    );

    if (isChecked) {
      setSelectedCities((prev) => ({
        ...prev,
        [stateId]: citiesData[stateId] || [],
      }));
    } else {
      setSelectedCities((prev) => {
        const newSelectedCities = { ...prev };
        delete newSelectedCities[stateId];
        return newSelectedCities;
      });
    }

    setExpandedState(prev => (prev === stateId ? null : stateId));
  };

  const handleCityChange = (stateId, cityName) => {
    setSelectedCities((prev) => {
      const newCities = prev[stateId]?.includes(cityName)
        ? prev[stateId].filter((city) => city !== cityName)
        : [...(prev[stateId] || []), cityName];

      if (newCities.length > 0 && !selectedStates.includes(stateId)) {
        setSelectedStates((prevStates) => [...prevStates, stateId]);
      }

      if (newCities.length === 0) {
        setSelectedStates((prevStates) => prevStates.filter((id) => id !== stateId));
      }

      return {
        ...prev,
        [stateId]: newCities,
      };
    });
  };

  const handleSelectAllCities = (stateId) => {
    const allCities = citiesData[stateId] || [];
    const allSelected = selectedCities[stateId]?.length === allCities.length;

    setSelectedCities((prev) => ({
      ...prev,
      [stateId]: allSelected ? [] : allCities,
    }));

    if (!allSelected) {
      setSelectedStates((prev) => [...prev, stateId]);
    } else {
      setSelectedStates((prev) => prev.filter((id) => id !== stateId));
    }
  };

  const handleSelectAllStates = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedStates(states.map(state => state.id));
      setExpandedState(null);
      setSelectedCities(states.reduce((acc, state) => {
        acc[state.id] = citiesData[state.id] || [];
        return acc;
      }, {}));
    } else {
      setSelectedStates([]);
      setSelectedCities({});
    }
  };

  const handleSave = useCallback(() => {
    // const selectedCitiesNames = Object.keys(selectedCities).flatMap((stateId) =>
    //   selectedCities[stateId].map((city) => `${states.find((state) => state.id === stateId)?.name}: ${city}`)
    // );

    // console.log("Selected Cities and States:", selectedCitiesNames);

    const selectedCitiesNames = Object.values(selectedCities)
    .flat()
    .join(',');

  console.log("Selected Cities:", selectedCitiesNames);


    if (onSave) {
      onSave(selectedCitiesNames);
    }
  }, [selectedCities, states, onSave]);

  return (
    <div className="w-[270px] pt-[8%] mx-auto h-[500px] overflow-auto">
      <h2 className="text-2xl font-semibold mb-4">Choose Your Operation Area</h2>
      <div className="space-y-4">
        <div className="text-left mb-[15px]">
          <div className="flex items-center mb-[15px]">
            <input
              type="checkbox"
              id="select-all-states"
              checked={selectedStates.length === states.length}
              onChange={handleSelectAllStates}
              className="mr-[5px]"
            />
            <label htmlFor="select-all-states" className="text-md">Select All States</label>
          </div>
          {states.map((state) => (
            <div key={state.id} className="mb-[15px]">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id={`state-${state.id}`}
                  checked={selectedStates.includes(state.id)}
                  onChange={handleStateChange}
                  value={state.id}
                  className="mr-[5px]"
                />
                <label htmlFor={`state-${state.id}`} className="text-md">{state.name}</label>
                <button
                  type="button"
                  onClick={() => setExpandedState(expandedState === state.id ? null : state.id)}
                  className="ml-auto bg-[#4CAF50] text-white px-2 py-1 rounded transition-all ease-in-out duration-300 cursor-pointer hover:bg-[#43A047]"
                >
                  {expandedState === state.id ? 'Hide Cities' : 'Show Cities'}
                </button>
              </div>
              {expandedState === state.id && (
                <div className="ml-6 mt-2 bg-[#f2f2f2] border border-gray-300 rounded-lg p-[15px] w-[200px]">
                  <div className="flex items-center mb-[10px]">
                    <input
                      type="checkbox"
                      id={`select-all-cities-${state.id}`}
                      checked={selectedCities[state.id]?.length === (citiesData[state.id]?.length || 0)}
                      onChange={() => handleSelectAllCities(state.id)}
                      className="mr-[5px]"
                    />
                    <label htmlFor={`select-all-cities-${state.id}`} className="text-md">Select All Cities</label>
                  </div>
                  {citiesData[state.id]?.map((city) => (
                    <div key={city} className="flex items-center mb-[5px]">
                      <input
                        type="checkbox"
                        id={`city-${state.id}-${city}`}
                        checked={selectedCities[state.id]?.includes(city) || false}
                        onChange={() => handleCityChange(state.id, city)}
                        className="mr-[5px]"
                      />
                      <label htmlFor={`city-${state.id}-${city}`} className="text-md">{city}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={handleSave}
          className="uppercase outline-none bg-[#4CAF50] w-full border-0 py-[15px] text-white text-[14px] transition-all ease-in-out duration-300 cursor-pointer hover:bg-[#43A047]"
        >
          Save
        </button>
      </div>
    </div>
  );
};
