"use client";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

const songwritingTechniques = [
  {
    category: "Song Structure",
    details: `
        (1) Common structures: Verse-Chorus-Verse-Chorus-Bridge-Chorus (A-B-A-B-C-B)
        (2) Other forms: AABA, ABAB, AAA, through-composed
        (3) Bridges provide contrast and development before returning to the main theme
      `
  },
  {
    category: "Melody Writing",
    details: `
        (1) Use stepwise motion with occasional leaps for interest
        (2) Repetition and variation keep melodies memorable
        (3) Melodic contour (rising and falling motion) affects emotional impact
      `
  },
  {
    category: "Lyrics & Storytelling",
    details: `
        (1) Show, don’t tell: Use vivid imagery and emotions
        (2) Rhyme schemes: AABB, ABAB, ABCB, or free form
        (3) Perspective: First-person (I), second-person (you), or third-person (he/she/they)
      `
  },
  {
    category: "Chord Progressions",
    details: `
        (1) Common progressions: I-V-vi-IV (C-G-Am-F), ii-V-I (jazz), I-IV-V-I (rock)
        (2) Experiment with borrowed chords and modal interchange for unique harmonies
        (3) Secondary dominants and diminished chords add tension and movement
      `
  },
  {
    category: "Hooks & Catchiness",
    details: `
        (1) Hooks can be melodic, lyrical, or rhythmic (earworm effect)
        (2) Repetition helps solidify the main idea in the listener’s mind
        (3) Unexpected twists in melody or lyrics make a song stand out
      `
  },
  {
    category: "Rhythm & Groove",
    details: `
        (1) Syncopation and unexpected accents create interest
        (2) Changing subdivisions (e.g., straight vs. swung rhythms) affect feel
        (3) Groove determines the song’s energy and style (funk, ballad, upbeat pop)
      `
  },
  {
    category: "Emotional Impact",
    details: `
        (1) Match lyrics to melody and harmony (sad lyrics with minor chords, uplifting lyrics with major chords)
        (2) Dynamic contrast (soft vs. loud sections) keeps listeners engaged
        (3) Use silence strategically to build tension and anticipation
      `
  },
  {
    category: "Collaboration & Co-Writing",
    details: `
        (1) Different perspectives bring fresh ideas
        (2) Bounce melodies, lyrics, and chord ideas off each other
        (3) Set a clear creative direction while allowing room for spontaneity
      `
  },
  {
    category: "Songwriting Exercises",
    details: `
        (1) Write a song using only three chords
        (2) Create a melody first, then add lyrics (or vice versa)
        (3) Re-write an existing song’s lyrics with a new theme
        (4) Improvise a melody over a random chord progression
      `
  },
  {
    category: "Production & Arrangement",
    details: `
        (1) Layer instruments to enhance emotional depth
        (2) Experiment with different instrumentations for variation
        (3) Ensure transitions between song sections feel natural and impactful
      `
  }
];

function SongWriting() {
  return (
    <div className="py-32 bg-gray-900">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-10 text-white">SongWriting</h1>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {songwritingTechniques.map((object) => (
            <div key={object.category} className="flex justify-center">
              <WobbleCard>
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-neutral-200 mt-4 mb-2 dark:text-neutral-200">{object.category}</p>
                  <p className="text-sm mb-4 text-neutral-200 dark:text-neutral-200 flex-grow whitespace-pre-line">{object.details}</p>
                </div>
              </WobbleCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SongWriting;