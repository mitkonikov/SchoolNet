

// >>> socket.on("get generated words" ...
//  else { ...
//          it's empty, so fill it from the logDemo :D      
//          WE NEED TO FILL THE DEMO WITH THIS INFO AT THE END OF THE GAME

                            /*if (typeof data.wordCount !== "undefined" && data.wordCount > 0) {
                                let pickWordIDs = [];
                                for (let i = 0; i < data.wordCount; ++i) {
                                    pickWordIDs.push("pickWord" + i);
                                }

                                let joined = pickWordIDs.join().replace(/,/g, "','");
                                joined = "'" + joined + "'";

                                records.query("SELECT Data FROM " + demo_table + " WHERE Command IN (" + joined + ")", (err, rows) => {
                                    if (err) {
                                        console.trace(err);
                                        return;
                                    }
                                    
                                    let words = [];
                                    let justWords = [];
                                    
                                    if (rows.length >= data.wordCount) {
                                        // console.log("enough rows!");

                                        for (let i = rows.length - data.wordCount; i < rows.length; ++i) {
                                            let PARSED = JSON.parse(rows[i].Data);
                                            words.push(PARSED);
                                        }

                                        words.sort((a, b) => { return a.Number - b.Number; });
                                        for (let word of words) {
                                            justWords.push({ Number: word.Number, Word: word.Word });
                                        }

                                        //console.log("WORDS: ");
                                        //console.log(words);

                                        // put the words in the json file
                                        API.demoLogger.getDemoFile(null, current_demo_path, (demo_data) => {
                                            let thisDemo = demo_data;
                                            
                                            thisDemo.game = [];

                                            for (let word in words) {
                                                thisDemo.game.push(words[word]);
                                            }
                        
                                            // write it
                                            fs.writeFile(current_demo_path, JSON.stringify(thisDemo), 'utf-8', (err) => {
                                                if (err) console.trace("error writing to demo");
                                            });
                                        });
                                        
                                        // send the words to the client
                                        // TODO: think about the truthfulness value
                                        socket.emit("set generated words", words);
                                    }
                                });
                            }*/