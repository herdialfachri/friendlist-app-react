import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import './App.css';

function FriendDetail() {
  const { state } = useLocation();
  const { friend } = state;

  if (!friend) return <div>Teman tidak ditemukan.</div>;

  return (
    <div className="container friend-detail">
      <img src={friend.imageUrl} alt={friend.name} className="friend-detail-img" />
      <h2>{friend.name}</h2>
      <p>{friend.description}</p>
      <Link to="/">
      <button className="button-green">Kembali ke Daftar Teman</button>
      </Link>
    </div>
  );
}

export default FriendDetail;
