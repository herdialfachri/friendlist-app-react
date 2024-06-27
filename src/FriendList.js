import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const friends = [
  { id: 1, name: 'M. Herdi Al-Fachri', description: 'Herdi adalah seorang mahasiswa Teknik Informatika Semester 6', imageUrl: 'https://scontent.fbdo3-1.fna.fbcdn.net/v/t39.30808-6/301136034_3269381543323433_2737340746246493402_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGsRwm3FQiGKZIoAMrV73JjzQmtShaDioTNCa1KFoOKhFnLYeOQ-PMcdkvTEdDn3kqrhKJwCdwUIugOtqv3yzGW&_nc_ohc=S56GUk_8h0oQ7kNvgE-Jjk2&_nc_zt=23&_nc_ht=scontent.fbdo3-1.fna&oh=00_AYCU-3JkeT-VefYBrjmK7ivKPjt_jQyJmzqpsDE6mavjoQ&oe=6682E002' },
  { id: 2, name: 'Agung Prayoga', description: 'Agung adalah seorang mahasiswa Teknik Sipil Semester 6', imageUrl: 'https://scontent.fbdo3-1.fna.fbcdn.net/v/t39.30808-6/433703385_3731289187142567_8260351809290071804_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGc3s6DIILpqjaqtKfGDT9z7XUUTy-Cq-ftdRRPL4Kr5wJJ3u1izMJbksguOfYI55PokJjdp8BqgUG67miz3W-e&_nc_ohc=bpZJwjIs-xgQ7kNvgECD2SW&_nc_zt=23&_nc_ht=scontent.fbdo3-1.fna&oh=00_AYAE2Feydcbq-UNE_ryJGx7mqPSVmeqUjWN0Xeu1jQcIEQ&oe=6682C3DC' },
  { id: 3, name: 'Agung M Syahril', description: 'Syahril adalah seorang mahasiswa Administrasi Bisnis Semester 7', imageUrl: 'https://scontent.fbdo3-1.fna.fbcdn.net/v/t39.30808-6/449085061_2194438014266677_5573654165586962022_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGiXJiqzRpRU1OfsrxaDQPWmEekReaZ3eqYR6RF5pnd6pzcV7zYcD0KmoVv0Cp47O7sHsIQBAS_bHyM9l1_pEf5&_nc_ohc=DdQEk1pHdS4Q7kNvgHuoyeV&_nc_zt=23&_nc_ht=scontent.fbdo3-1.fna&oh=00_AYCVRM8So5TdHIxP9akLhWgl_EZHcNz8qRnyPXiYB5lmzQ&oe=6682C793' },
];

function FriendList() {
  return (
    <div className="container">
      {friends.map(friend => (
        <div key={friend.id} className="friend-card">
          <img src={friend.imageUrl} alt={friend.name} />
          <div>
            <h3>{friend.name}</h3>
            <p>{friend.description}</p>
            <Link to={`/friend/${friend.id}`} state={{ friend }}>
              <button>Detail</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FriendList;
