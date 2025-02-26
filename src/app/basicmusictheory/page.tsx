"use client";
import React from "react";
import { GlareCard } from "@/components/ui/glare-card";

const musicTheoryBasics = [
  {
    category: "Notes & Pitch",
    details: `
        (1) 12 notes in Western music: A, A#, B, C, C#, D, D#, E, F, F#, G, G#
        (2) Notes repeat in higher or lower registers (octaves)
      `
  },
  {
    category: "Scales",
    details: `
        (1) A scale is a set of notes arranged in order
        (2) Major Scale example: C Major (C-D-E-F-G-A-B-C)
        (3) Minor Scale example: A Minor (A-B-C-D-E-F-G-A)
        (4) Other common scales: Pentatonic, Blues, Chromatic
      `
  },
  {
    category: "Chords",
    details: `
        (1) A chord is a group of notes played together
        (2) Triads (three-note chords): Major (C-E-G), Minor (A-C-E)
        (3) Advanced chords: Sevenths, diminished, augmented
      `
  },
  {
    category: "Rhythm & Time Signatures",
    details: `
        (1) Beat: The steady pulse of the music
        (2) Tempo: Speed of the beat (measured in BPM – beats per minute)
        (3) Time Signatures define beats per measure:
          - 4/4 (common time) – 4 beats per measure
          - 3/4 (waltz time) – 3 beats per measure
          - 6/8 (compound time) – used in folk and classical music
      `
  },
  {
    category: "Melody & Harmony",
    details: `
        (1) Melody: A sequence of notes that form a tune
        (2) Harmony: Combining notes to support the melody (e.g., playing chords under vocals)
      `
  },
  {
    category: "Key Signatures",
    details: `
        (1) Key tells the 'home' note and scale of a piece
        (2) C Major/A Minor – No sharps or flats
        (3) G Major/E Minor – One sharp (F#)
        (4) Key signatures help determine the mood of the music
      `
  },
  {
    category: "Dynamics & Expression",
    details: `
        (1) Dynamics: Volume changes in music
        (2) Piano (p) – Soft, Forte (f) – Loud, Crescendo – Getting louder
        (3) Articulations: Staccato (short and detached), Legato (smooth and connected)
      `
  }
];

function BasicMusicTheory() {
  return (
    <div className="py-32 bg-gray-900">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-10 text-white">Basic Music Theory</h1>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {musicTheoryBasics.map((object) => (
            <div key={object.category} className="flex justify-center">
              <GlareCard className="flex flex-col items-center justify-center border">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">{object.category}</p>
                  <p className="text-sm mb-4 text-neutral-200 dark:text-neutral-200 flex-grow whitespace-pre-line">{object.details}</p>
                </div>
              </GlareCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BasicMusicTheory;